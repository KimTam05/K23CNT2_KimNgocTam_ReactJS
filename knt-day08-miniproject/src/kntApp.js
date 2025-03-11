import React, { Component } from 'react'
import KntForm from './components/kntForm'
import KntStudentList from './components/kntStudentList'
import KntControl from './components/kntControl'

export default class KntApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
        kntStudentList:[
            {
                kntID: 'SV001',
                kntName: 'Kim Tâm',
                kntAge: 20,
                kntGender: 'Nam',
                kntBirthday: '2000/01/01',
                kntBirthAddress: '',
                kntAddress: '',
            },
        ],
        selectedStudent: null,
        
    }
  }
  handleSelectStudent = (student) => {
    this.setState({ selectedStudent: student })
  }
  handleUpdateStudent = (upodatedStudent) => {
    this.setState((prevState) => {
      const updatedStudents = prevState.students.map((student) =>
        student.id === updatedStudent.kntID ? updatedStudent : student
      );
      return { students: updatedStudents, selectedStudent: null }
    })
  }
  render() {
    return (
      <div className='row'>
      <div className="col-lg-7 grid-margin strech-card">
        <div className='card'>
          <KntControl />
          <KntStudentList students={this.state.students} onSelect={this.handleSelectStudent}/>
          
        </div>
      </div>
      <div className="col-5 grid-margin">
        {this.state.selectedStudent && (
          <KntForm 
          student={this.state.selectedStudent}
          onUpdateStudent={this.handleUpdateStudent}/>
        )}
      </div>
    </div>
    )
  }
}
