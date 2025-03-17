import React from 'react'

export default function KntListUser({KntUsers}) {
    const kntListUser = KntUsers.map((kntItem, index) => (
        <tr>
            <td>{index + 1}</td>
            <td>{kntItem.id}</td>
            <td>{kntItem.fullname}</td>
            <td>{kntItem.username}</td>
            <td>{kntItem.password}</td>
        </tr>
    ));
  return (
    <table className='table'>
        <thead>
            <tr>
                <td>#</td>
                <td>ID</td>
                <td>Full Name</td>
                <td>User Name</td>
                <td>password</td>
            </tr>
        </thead>
        <tbody>
            {kntListUser}
        </tbody>
    </table>
  )
}
