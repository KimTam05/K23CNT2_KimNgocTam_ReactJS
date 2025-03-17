import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import KntNavBar from './components/KntNavBar';
import KntHome from './components/KntHome';
import KntAbout from './components/KntAbout';
import KntContact from './components/KntContact';
import KntListUser from './components/KntListUser';
import { useState } from 'react';
import KntFormUser from './components/KntFormUser';

export default function KntApp() {
  // const KntUsers = [{
  //   id: "SV001",
  //   fullname: "Nguyen Van A",
  //   username: "nguyenvana",
  //   password: "123456"
  // },{
  //   id: "SV002",
  //   fullname: "Tran Thi B",
  //   username: 'tranthib',
  //   password: 'abcdef'
  // },{
  //   id: "SV003",
  //   fullname: "Bach Van C",
  //   username: 'bachvanc',
  //   password: 'aklsjkdhlfhf'
  // }];

  const [KntUsers, setKntUsers] = useState([{
    id: "SV001",
    fullname: "Nguyen Van A",
    username: "nguyenvana",
    password: "123456"
  },{
    id: "SV002",
    fullname: "Tran Thi B",
    username: 'tranthib',
    password: 'abcdef'
  },{
    id: "SV003",
    fullname: "Bach Van C",
    username: 'bachvanc',
    password: 'aklsjkdhlfhf'
  }]);

  const kntMemberOnAdd = (kntParam) =>{
    setKntUsers(KntUsers => {
      return [
        ...KntUsers, kntParam
      ]
    });
  }
  return (
    <div className='container border mt-3'>
      <h1>React Router Dom - Demo - [Kim Ngoc Tam - K23CNT2]</h1>
      <hr/>
      <Router>
        <KntNavBar />
        <Routes>
            <Route path='/' element= {<KntHome/>}/>
            <Route path='/about' element= {<KntAbout/>}/>
            <Route path='/contact' element= {<KntContact/>}/>
            <Route path='/user-list' element={<KntListUser KntUsers={KntUsers}/>}/>
            <Route path='/user-form' element={<KntFormUser KntOnAdd={kntMemberOnAdd}/>}/>
        </Routes>
      </Router>
    </div>
  )
}
