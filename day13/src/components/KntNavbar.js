import React from 'react'
import { Link } from 'react-router-dom'

export default function KntNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className='navbar-brand text-white ms-2' to="/" >KNT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/'>Trang chủ</Link>
                </li>
                <li className="nav-item">                                                           
                    <Link className='nav-link text-white' to='/user-list'>Danh sách</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link text-white' to='/add-user'>Thêm mới</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
