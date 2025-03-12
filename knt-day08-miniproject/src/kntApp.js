import React from 'react'
import KntStudentList from './components/kntStudentList';

export default function KntApp() {
  const KntStudents = [{
    kntID: 'SV001',
    kntName: 'Kim Tam',
    kntAge: 20,
    kntGender: 1,
    kntDOB: '01-01-2005',
    kntBA: 'Hà Nội',
    kntAddress: 'Hà Nội',
  }];
  return (
    <div>
      <h1 className='text-center'>Kim Ngọc Tâm - K23CNT2 - MiniProject01</h1>
      <div>
        <KntStudentList kntData={KntStudents}/>
      </div>
    </div>
  )
}
