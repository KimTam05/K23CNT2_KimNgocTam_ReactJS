import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import KntNavbar from './components/KntNavbar';
import KntHome from './components/KntHome';
import KntListUser from './components/KntListUser';
import KntAddUser from './components/KntAddUser';
import KntEditUser from './components/KntEditUser';


export default function KntApp() {
  return (
    <div className='container'>
      <h1>Kim Ngoc Tam - Mini Project</h1>
      <Router>
        <KntNavbar/>
        <Routes>
          <Route path='/' element={<KntHome/>}></Route>
          <Route path='/user-list' element={<KntListUser/>}></Route>
          <Route path='/add-user' element={<KntAddUser/>}></Route>
          <Route path="/edit/:id" element={<KntEditUser />} />

        </Routes>
      </Router>
    </div>
  )
}
