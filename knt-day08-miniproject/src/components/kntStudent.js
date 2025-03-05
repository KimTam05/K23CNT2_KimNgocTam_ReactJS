// Class Parent components which stores the state
import React, { Component } from 'react'
import KntForm from './kntForm'

export default class KntStudent extends Component {
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
            
        }
    }
    kntDeleteStudent = (kntID) => {
        this.setState((prevState) => ({
            kntStudentList: prevState.kntStudentList.filter((kntItem) => kntItem.kntID !== kntID),
        }));
    }
    kntEditAccess = (kntItem) => {
        const student = this.state.kntStudentList.find((item) => item.kntID === kntItem.kntID);
        if (student) {
            <><KntForm kntStudent={student} /></>
        }
    }
    

  render() {
    let kntStudent = this.state.kntStudentList.map((kntItem, index) => {
        return(
            <tr key={index + 1}>
                <th scope='row'>{index + 1}</th>
                <td>{kntItem.kntID}</td>
                <td>{kntItem.kntName}</td>
                <td>{kntItem.kntAge}</td>
                <td>{kntItem.kntGender}</td>
                <td>{kntItem.kntBirthday}</td>
                <td>{kntItem.kntBirthAddress}</td>
                <td>{kntItem.kntAddress}</td>
                <td>
                    <button className='btn btn-danger'>Xem</button>
                    <button className='btn btn-warning mx-2' onClick={() => this.kntEditAccess(kntItem.kntID)}>Sửa</button>
                    <button className='btn btn-info' onClick={() => this.kntDeleteStudent(kntItem.kntID)}>Xóa</button>
                </td>
            </tr>
        )
    });
    return (
      <tbody>
        {kntStudent}
      </tbody>
    )
  }
}
