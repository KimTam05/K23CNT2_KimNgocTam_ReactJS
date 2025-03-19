import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function KntAddUser() {
    const [kntID, setKntID] = useState('');
    const [kntName, setKntName] = useState('');
    const [kntEmail, setKntEmail] = useState('');
    const [kntPhone, setKntPhone] = useState('');
    const [knt_active, setKntActive] = useState(false);

    const navigate = useNavigate();

    const kntMockAPI = "https://67d8d81100348dd3e2a86846.mockapi.io/knt-2310900094/knt-day13";

    const kntHandleSubmit = (evt) => {
        evt.preventDefault();
        let KntNewUser = {kntID, kntName, kntEmail, kntPhone, knt_active};
        axios.post(kntMockAPI, KntNewUser);
        navigate('/user-list');
    }

  return (
    <div className='card my-3'>
        <h3 className='card-header'>Thêm mới người dùng</h3>
        <form onSubmit={kntHandleSubmit}>
            <div className='card-body'>
                <div className='mb-3'>
                    <label className='form-label'>ID:</label>
                    <input type='text' name='kntID' className='form-control' onChange={(ev) => setKntID(ev.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Name:</label>
                    <input type='text' name='kntName' className='form-control' onChange={(ev) => setKntName(ev.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email:</label>
                    <input type='text' name='kntEmail' className='form-control' onChange={(ev) => setKntEmail(ev.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Phone:</label>
                    <input type='text' name='kntPhone' className='form-control' onChange={(ev) => setKntPhone(ev.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Active?:</label> <br/>
                    <input type='radio' name='knt_active' value='true' className='form-check-input' onChange={(ev) => setKntActive(ev.target.value)}/>
                    <label className='form-check-label'>  Open</label> <br/>
                    <input type='radio' name='knt_active' value={'false'} className='form-check-input' onChange={(ev) => setKntActive(ev.target.value)}/>
                    <label className='form-check-label'>  Close</label>
                </div>
            </div>
            <div className='card-footer'>
                <button className='btn btn-primary'>Add User</button>
            </div>
        </form>
    </div>
  )
}
