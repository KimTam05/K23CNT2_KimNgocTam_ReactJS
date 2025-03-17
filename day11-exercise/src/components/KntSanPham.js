import React from 'react'

export default function KntSanPham({KntBooks}) {
  const KntBookLists = KntBooks.map((KntItem, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{KntItem.id}</td>
        <td>{KntItem.title}</td>
        <td>{KntItem.author}</td>
      </tr>
    )
  })
  return (
    <table className='table my-2'>
      <thead>
        <tr>
          <td>#</td>
          <td>ID</td>
          <td>Title</td>
          <td>Author</td>
        </tr>
      </thead>
      <tbody>
        {KntBookLists}
      </tbody>
    </table>
  )
}
