import React from 'react'
import KntStudentList from './components/kntStudentList'
import KntControl from './components/kntControl'
import KntForm from './components/kntForm'

export default function KntApp() {
  return (
    <div className='row'>
      <div className="col-lg-7 grid-margin strech-card">
        <div className='card'>
          <KntControl />
          <KntStudentList />
        </div>
      </div>
      <div className="col-5 grid-margin">
        <><KntForm /></>
      </div>
    </div>
  )
}
