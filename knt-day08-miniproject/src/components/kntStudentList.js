import React from "react";

const KntStudentList = ({kntData}) => {
    const data = Array.isArray(kntData) ? kntData : [kntData];
    return (
        <table className='table table-bordered'>
            <thead className="table-dark text-center">
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
                <KntStudent KntStudentList={data}/>
            </tbody>
        </table>
    )
}

const KntStudent = ({KntStudentList}) => {
    return (
        <>
            {
            KntStudentList.map((kntItem, index) => (
                <tr key={index} className="text-center">
                    <th>{index + 1}</th>
                    <td>{kntItem.kntID}</td>
                    <td>{kntItem.kntName}</td>
                    <td>{kntItem.kntAge}</td>
                    <td>{kntItem.kntGender}</td>
                    <td>{kntItem.kntDOB}</td>
                    <td>{kntItem.kntBA}</td>
                    <td>{kntItem.kntAddress}</td>
                    <td>
                        <button className="btn btn-sm btn-primary me-2">✏ Sửa</button>
                        <button className="btn btn-sm btn-danger">🗑 Xóa</button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default KntStudentList;