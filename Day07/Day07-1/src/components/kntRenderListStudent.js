import React, { Component } from 'react'

export default class KntRenderListStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        kntStudent:[
            {kntID:'NTU001', kntName:"Kim Tâm", kntAge:20, kntClass:"CNTT"},
            {kntID:'NTU002', kntName:"Văn A", kntAge:20, kntClass:"CNTT"},
            {kntID:'NTU003', kntName:"Văn B", kntAge:20, kntClass:"CNTT"},
            {kntID:'NTU004', kntName:"Văn C", kntAge:20, kntClass:"CNTT"},
        ],
    }

  }
    render() {
        let kntElement = this.state.kntStudent.map((kntItem, index) => {
            return(
                <tr key={index + 1}>
                            <th scope='row'>{kntItem.kntID}</th>
                            <td>{kntItem.kntName}</td>
                            <td>{kntItem.kntAge}</td>
                            <td>{kntItem.kntClass}</td>
                            <td><button className='btn btn-danger'>Delete</button>
                                <button className='btn btn-primary mx-1'>Edit</button>
                            </td>

                        </tr>
            )
        })
    return (
      <div className='alert alert-info'>
        <h2>Danh sách sinh viên</h2>
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Age</th>
                    <th scope='col'>Class</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {kntElement}
            </tbody>
        </table>
      </div>
    )
  }
}
