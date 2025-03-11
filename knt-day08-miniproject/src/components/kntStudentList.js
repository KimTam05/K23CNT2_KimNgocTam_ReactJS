import React, { Component } from 'react'
import KntStudent from './kntStudent'

export default class kntStudentList extends Component {
  render() {
    return (
        <div class="card-body">
        <h3 class="card-title">Danh sách sinh viên</h3>
        <div class="table-responsive pt-3">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Nơi sinh</th>
                        <th>Địa chỉ</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.students.map((student, index) => (
                        <KntStudent key={index} student={student}  onSelect={this.props.onSelect}/>
                    ))}
                </tbody>

            </table>
        </div>
    </div>
    )
  }
}
