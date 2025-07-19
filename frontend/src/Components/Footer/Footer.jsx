import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const scrollToTop = () => {
    window.scrollTo({
       top: 0,
       behavior: 'smooth'
    }); 
}

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
        <div className='container mx-auto px-4 py-12'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                    <h3 className='text-xl font-bold mb-4'>회사 소개</h3>
                    <p className='text-gray-400'>
                        저희 회사는 혁신적인 기술과 서비스를 통해 고객의 가치를 창출합니다.  
                    </p>
                </div>

                <div>
                    <h3 className='text-xl font-bold mb-4'>빠른 링크</h3>
                        <ul className='space-y-2'>
                            <li><Link to="/" onClick={scrollToTop} className="hover:text-white translation-colors">홈</Link></li>
                            <li><Link to="/about" onClick={scrollToTop} className="hover:text-white translation-colors">회사 정보</Link></li>
                            <li><Link to="/leadership" onClick={scrollToTop} className="hover:text-white translation-colors">임원 소개</Link></li>
                            <li><Link to="/board" onClick={scrollToTop} className="hover:text-white translation-colors">업무 게시판</Link></li>
                            <li><Link to="/our-services" onClick={scrollToTop} className="hover:text-white translation-colors">제공 기술</Link></li>
                            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-white translation-colors">문의</Link></li>
                        </ul>
                </div>

                <div>
                    <h3 className='text-xl font-bold mb-4'>연락처</h3>
                    <ul className='space-y-2 text-gray-400'>
                        <li>서울특별시 강남구</li>
                        <li>삼성동 123번지</li>
                        <li>전화: 02-1234-5678</li>
                        <li>이메일: infomation@naver.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-4'>소셜 미디어</h3>
                    <div className='flex space-x-4'>
                        <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                        <FaFacebook /></a>
                        <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                        <FaTwitter /></a>
                        <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                        <FaInstagram /></a>
                        <a href="#" className='text-gray-400 hover:text-white transition-colors'>
                        <FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
                <p>&copy; 2025 Sungwon Company. All rights reserved.</p>
                <p className='mt-2'>개인정보 처리방침 | 이용 약관</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
 