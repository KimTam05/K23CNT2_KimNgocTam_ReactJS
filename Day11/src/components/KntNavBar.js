import React from 'react'
import {Link} from 'react-router-dom';

export default function KntNavBar() {
  return (
    <div>
        <ul>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/contact"> Contact </Link></li>
            <li><Link to="/user-list"> List </Link></li>
            <li><Link to="/user-form"> Add User </Link></li>
        </ul>
    </div>
  )
}
