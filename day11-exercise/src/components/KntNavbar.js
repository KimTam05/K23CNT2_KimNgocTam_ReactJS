import React from 'react'
import { Link } from 'react-router-dom'

export default function KntNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className='navbar-brand' to="/" >KNT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className='nav-link' to='/'>Trang chủ</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/gioi-thieu'>Giới thiệu</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/san-pham'>Sản phẩm</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/tin-tuc'>Tin tức</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/lien-he'>Liên hệ</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
