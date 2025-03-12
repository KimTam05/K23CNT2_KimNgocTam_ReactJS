import React from 'react';
import { useState } from 'react';
import KntMemberList from './components/kntMemberList'
import KntMemberAdd from './components/kntMemberAdd';

export default function KntApp() {
  const [kntMember, kntMemberSet] = useState([
    {
      kntID: "1",
      kntFullName: "Nguyễn Văn A",
      kntUserName: "nguyenvana",
      kntPassword: "123456",
    },{
      kntID: "2",
      kntFullName: "Trần Thị B",
      kntUserName: "tranthib",
      kntPassword: "abcdef",
    },{
      kntID: "3",
      kntFullName: "Lê Văn C",
      kntUserName: "levanc",
      kntPassword: "qwerty",
    }
  ]);
  const kntHandleAddMember = (kntNewMember) => {
    kntMemberSet([...kntMember, kntNewMember]);
  };
  return (
    <>
      <div>
        <h2 className='text-center'>KNT - 2310900094 - K32CNT2 - Exam</h2>
      </div>
      <div className='row'>
        <div className='col-sm-6 border border-opacity-50 p-2 rounded-2'>
          <h3>Member List</h3>
          <KntMemberList kntMembers={kntMember}/>
          </div>
        <div className='col-sm-1'/>
        <div className='col-sm-5 border border-opacity-50 p-2 rounded-2'><KntMemberAdd kntMemberOnAdd={kntHandleAddMember}/></div>
      </div>
    </>
  )
}
