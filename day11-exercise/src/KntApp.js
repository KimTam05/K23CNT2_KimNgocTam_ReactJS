import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import KntNavbar from './components/KntNavbar';
import KntHome from './components/KntHome';
import KntGioiThieu from './components/KntGioiThieu';
import KntSanPham from './components/KntSanPham';
import KntTinTuc from './components/KntTinTuc';
import KntLienHe from './components/KntLienHe';

export default function KntApp() {
  return (
    <div className='container border mt-3'>
      <h2>Day 12 - Exercise - Kim Ngoc Tam</h2>
      <hr/>
      <Router>
        <KntNavbar />
        <Routes>
          <Route path='/' element={<KntHome/>}/>
          <Route path='/gioi-thieu' element={<KntGioiThieu/>}/>
          <Route path='/tin-tuc' element={<KntTinTuc/>}/>
          <Route path='/lien-he' element={<KntLienHe/>}/>
          <Route path='/san-pham' element={<KntSanPham/>}/>
        </Routes>
      </Router>
    </div>
  )
}
