import React from 'react'

export default function KntFuncCompEventProps(props) {
    const KntHandleButtonClick1 = () => {
        alert('Dữ liệu từ props:' + props.kntRenderName);
    }
  return (
    <div>
        <button className='btn btn-primary mx-1' onClick={KntHandleButtonClick1}>Item 1</button>
        <button className='btn btn-danger' onClick={''}>Item 2</button>
    </div>
  )
}
