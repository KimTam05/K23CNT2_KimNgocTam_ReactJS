import React, { useEffect, useState } from 'react'

export default function KntUseEffect() {
    const [kntCount, setKntCount] = useState(0);
    useEffect(() => {
        console.log('useEffect');
    })
    useEffect(() => {
        console.log('useEffect 2 tham so, tham so 2 rong');
    }, []);
    const kntArr = [10, 12, 20, 22];
    const [kntArray, setKntArray] = useState(kntArr);
    useEffect(() => {
        console.log('useEffect 2 tham so, tham so 2 co gia tri')
    }, [kntArray]);
    const kntHandleAddList = () => {
        setKntArray([...kntArray, parseInt(Math.random() * 100)]);
      };
  return (
    <div className='alert alert-info'>
        <h2>useEffect Demo</h2>
        <h3>Count: {kntCount}</h3>
        <button onClick={() => setKntCount(kntCount + 1)}>Click Here</button>

        <div>
            <h3>Array: {kntArray.toString()}</h3>
            <button onClick={() => kntHandleAddList()}>Thêm</button>
        </div>
    </div>
  )
}
