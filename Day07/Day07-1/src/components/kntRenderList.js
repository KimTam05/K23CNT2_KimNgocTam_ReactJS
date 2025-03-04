import React from 'react'

export default function KntRenderList() {
    const kntList = ['Kim Tam', "Kim Ngoc Tam", "NTU"];

    const kntElement = kntList.map(item => <li>{item}</li>);
    return (
    <div className='alert alert-success'>
        <h2>Render List</h2>
        <ul>
        {
            kntList.map(item=>{
                return <li>{item}</li>
            })
        }
        </ul>
        <hr/>
        <ul>
            {kntElement}
        </ul>
    </div>
  )
}
