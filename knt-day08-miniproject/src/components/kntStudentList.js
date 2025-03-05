import React from 'react'
import KntStudent from './kntStudent'

export default function KntStudentList() {
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
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <KntStudent />
                        </table>
                    </div>
                </div>
  )
}
