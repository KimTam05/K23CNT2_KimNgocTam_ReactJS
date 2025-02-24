import React from 'react'

export default function KntFuncEvent1() {
    const kntEventButton1Click = () => {
        alert('Button 01 is Clicked');
    };

    const kntEventButton2Click = () => {
        alert('Button 02 is Clicked');
    };

    const kntEventButton3Click = (name) => {
        alert('Name: ' + name);
    };
  return (
    <div>
        <button className='btn btn-primary' onClick={kntEventButton1Click()}>Item 1</button>
        <button className='btn btn-danger' onClick={kntEventButton2Click()}>Item 2</button>
        <button className='btn btn-success' onClick={()=>kntEventButton3Click("Kim Tâm")}>Item 3</button>
    </div>
  )
}
