import React from 'react'

export default function KntTinTuc({KntNews}) {
  return (
    <div className='mx-2'>
      <h2>Tin tức mới nhất</h2>
      <div className='row'>
        {KntNews.map((KntNewItems, index) => (
          <div className='col-sm-3 border mx-2 my-2' key={index}>
            <h3>{KntNewItems.title}</h3>
            <p><strong>Ngày đăng:</strong> {KntNewItems.date}</p>
            <p>{KntNewItems.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
