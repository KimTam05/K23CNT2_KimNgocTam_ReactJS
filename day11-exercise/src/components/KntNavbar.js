import React from 'react'
import { Link } from 'react-router-dom'

export default function KntNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <Link className='navbar-brand text-white ms-2' to="/" >BOO</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/'>Trang chủ</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/gioi-thieu'>Giới thiệu</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/san-pham'>Sản phẩm</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/tin-tuc'>Tin tức</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/lien-he'>Liên hệ</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
