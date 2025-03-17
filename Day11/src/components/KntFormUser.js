import React from 'react'
import { useState } from 'react';

export default function KntFormUser({KntOnAdd}) {
    const [id, setKntID] = useState("");
    const [fullname, setKntFullName] = useState("");
    const [username, setKntUserName] = useState("");
    const [password, setKntPassword] = useState("");
    const KntHandleSubmit = (ev) => {
        ev.preventDefault();
        KntOnAdd({id, fullname, username, password});
        setKntID("");
        setKntFullName("");
        setKntUserName("");
        setKntPassword("");
    }
  return (
    <form onSubmit={KntHandleSubmit}>
        <div className='mb-3'>
            <label className='form-label'>ID: </label>
            <input type='text' name='id' value={id} className='form-control' onChange={(ev) => setKntID(ev.target.value)}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Full Name: </label>
            <input type='text' name='fullname' className='form-control' value={fullname} onChange={(ev) => setKntFullName(ev.target.value)}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>User Name: </label>
            <input type='text' name='username' value={username} className='form-control' onChange={(ev) => setKntUserName(ev.target.value)}/>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Password: </label>
            <input type='password' name='password' value={password} className='form-control' onChange={(ev) => setKntPassword(ev.target.value)}/>
        </div>
        <button type='submit' className='btn btn-primary mb-3'>Submit</button>
    </form>
  )
}
