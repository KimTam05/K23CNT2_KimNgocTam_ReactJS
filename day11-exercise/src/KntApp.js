import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import KntNavbar from './components/KntNavbar';
import KntHome from './components/KntHome';
import KntGioiThieu from './components/KntGioiThieu';
import KntSanPham from './components/KntSanPham';
import KntTinTuc from './components/KntTinTuc';
import KntLienHe from './components/KntLienHe';

export default function KntApp() {
  const featuredBooks = [
    { id: 1, title: "Đắc Nhân Tâm", author: "Dale Carnegie" },
    { id: 2, title: "Nhà Giả Kim", author: "Paulo Coelho" },
    { id: 3, title: "Bí Mật Tư Duy Triệu Phú", author: "T. Harv Eker" }
  ];
  const newsData = [
    { id: 1, title: "Sách mới tháng 3", date: "18/03/2025", summary: "Danh sách những cuốn sách đáng đọc trong tháng này." },
    { id: 2, title: "Lợi ích của đọc sách mỗi ngày", date: "10/03/2025", summary: "Đọc sách giúp cải thiện trí tuệ và sức khỏe tinh thần." },
    { id: 3, title: "Top sách bán chạy nhất 2025", date: "05/03/2025", summary: "Những cuốn sách được độc giả yêu thích nhất năm nay." },
  ];
  return (
    <div className='container border mt-3'>
      <h2>Day 12 - Exercise - Kim Ngoc Tam</h2>
      <hr/>
      <Router>
        <KntNavbar />
        <Routes>
          <Route path='/' element={<KntHome/>}/>
          <Route path='/gioi-thieu' element={<KntGioiThieu/>}/>
          <Route path='/tin-tuc' element={<KntTinTuc KntNews={newsData}/>}/>
          <Route path='/lien-he' element={<KntLienHe/>}/>
          <Route path='/san-pham' element={<KntSanPham KntBooks={featuredBooks}/>}/>
        </Routes>
      </Router>
      <footer>
        <p>&copy; 2025 BookStore. All rights reserved.</p>
      </footer>
    </div>
  )
}
