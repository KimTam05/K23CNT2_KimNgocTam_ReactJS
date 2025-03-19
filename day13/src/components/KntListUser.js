import React, {useState, useEffect} from 'react'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function KntListUser() {
    const [kntMockData, setKntMockData] = useState([]);

    const MockAPILink = "https://67d8d81100348dd3e2a86846.mockapi.io/knt-2310900094/knt-day13";

    useEffect(() => {
        axios
        .get(MockAPILink)
        .then((kntResponse) => {
            setKntMockData(kntResponse.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    const KntHandleDelete = (kntID) => {
        axios
        .delete(`${MockAPILink}/${kntID}`)
        .then((response) => {
            console.log(response);
            setKntMockData(prevData => prevData.filter(item => item.kntID !== kntID)
        )})
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className='card my-3'>
        <h3 className='card-header'>Danh sách người dùng</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active?</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    kntMockData.map((kntItem, index) => (
                        <tr key={kntItem.kntID}>
                            <th>{index + 1}</th>
                            <td>{kntItem.kntID}</td>
                            <td>{kntItem.kntName}</td>
                            <td>{kntItem.kntEmail}</td>
                            <td>{kntItem.kntPhone}</td>
                            <td>{kntItem.knt_active === true ? "Open" : "Close"}</td>
                            <td>
                                <Link to={`/edit/${kntItem.kntID}`} className='btn btn-primary me-2'>Edit</Link>
                                <button className='btn btn-danger' onClick={() => KntHandleDelete(kntItem.kntID)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
