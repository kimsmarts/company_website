import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from "react-icons/hi";


const menuItems = [
  { path: "/", label: "홈" },
  { path: "/about", label: "회사 정보" },
  { path: "/leadership", label: "임원 소개" },
  { path: "/board", label: "업무 게시판" },
  { path: "/our-services", label: "제공 기술" },
  { path: "/contact", label: "문의하기" },
];

const MenuItems = ({path, label, onClick}) => (
    <li>
        <Link 
        to={path} 
        className='hover:text-blue-600 transition duration-300' 
        onClick={onClick}
        >
            {label}
        </Link>
    </li>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('ko');

    const toggleMenu = () => setIsOpen(!isOpen);

  return (
  <nav className='fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50'>
    <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8'>
            <a href="/">Sungwon company</a>
        </h1>


        <div className='hidden lg:flex flex-1 justify-center'>
            <ul className='flex gap-8 text-lg'>
                {menuItems.map((item) => (
                    <MenuItems key={item.path} {...item} />
                ))} 
            </ul>
        </div>


        <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value)} 
        className='hidden lg:block px-3 ml-8 border rounded-md bg-white hover:border-blue-500 transition duration-300'
        >
            <option value="ko">한국어</option>
            <option value="en">영어</option>
        </select>

        <button className='lg:hidden text-2xl' onClick={toggleMenu}  aria-label = "메뉴">
            {isOpen ? <HiX /> : <HiMenu />}
            </button>
    </div>
            <div className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transfrom duration-300 ease-in-out z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`} 
                >
                <div className='p-4'>
                    <button 
                        className='text-2xl mb-8 float-right'
                        onClick={toggleMenu}
                        aria-label="닫기">
                        <HiX />
                    </button>
                    <ul className='clear-both space-y-4 pt-8 text-lg'>
                        {menuItems.map((item) => (
                            <MenuItems key={item.path} {...item} onClick={() => {
                                setIsOpen(false); // 메뉴 클릭 시 닫기
                                window.scrollTo({top:0, behavior: 'smooth'}); // 스크롤 맨 위로 이동
                            }}
                            />
                        ))}
                    </ul>
                    <select value={language} onChange={(e)=>setLanguage(e.target.value)} 
                    className="mt-6 px-3 py-1 border rounded-md bg-white hover:border-blue-500 transition duration-300">
                        <option value="ko">한국어</option>
                        <option value="en">영어</option>
                    </select>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
