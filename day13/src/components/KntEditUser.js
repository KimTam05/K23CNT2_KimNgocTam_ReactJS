import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function KntEditUser() {
    const MockAPILink = "https://67d8d81100348dd3e2a86846.mockapi.io/knt-2310900094/knt-day13";
    const { id } = useParams();
    console.log("ID từ URL:", id);
    const navigate = useNavigate();
    const [KntData, setKntData] = useState({
        kntName: "" ,
        kntEmail: "",
        kntPhone: '',
        knt_active: false,
    });

    useEffect(() => {
        axios
        .get(`${MockAPILink}/${id}`)
        .then(kntResponse => setKntData(kntResponse.data)).catch(error => console.log(error))
    }, [id]);

    const KntHandleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setKntData({
            ...KntData,
            [name]: type === "radio" ? checked : value
        });
    };

    const kntHandleSubmit = (ev) => {
        ev.preventDefault();
        axios.put(`${MockAPILink}/${id}`, KntData).then(() => {
            navigate("/user-list");
        })
    }


  return (
    <div className='card my-3'>
        <h3 className='card-header'>Thêm mới người dùng</h3>
        <form onSubmit={kntHandleSubmit}>
            <div className='card-body'>
                <div className='mb-3'>
                    <label className='form-label'>ID:</label>
                    <input type='text' name='kntID' className='form-control' value={KntData.kntID} disabled/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Name:</label>
                    <input type='text' name='kntName' className='form-control' value={KntData.kntName} onChange={KntHandleChange}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email:</label>
                    <input type='text' name='kntEmail' className='form-control' value={KntData.kntEmail} onChange={KntHandleChange}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Phone:</label>
                    <input type='text' name='kntPhone' className='form-control' value={KntData.kntPhone} onChange={KntHandleChange}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Active?:</label> <br/>
                    <input type='radio' name='knt_active' value='true' className='form-check-input' onChange={KntHandleChange} checked={KntData.knt_active}/>
                    <label className='form-check-label'>  Open</label> <br/>
                    <input type='radio' name='knt_active' value={'false'} className='form-check-input' onChange={KntHandleChange} checked={!KntData.knt_active}/>
                    <label className='form-check-label'>  Close</label> 
                </div>
            </div>
            <div className='card-footer'>
                <button className='btn btn-primary'>Save</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate("/user-list")}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
