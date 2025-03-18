import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function KntReactAPILocal() {
    const [kntListUser, setKntListUser] = useState([]);
    const apiURL = "http://localhost:3001/user"
    useEffect(() => {
        axios
            .get(apiURL)
            .then((kntRespone) =>{
                setKntListUser(kntRespone.data)
            })
            .catch((error) => {
                console.log("API URL:", apiURL);
                console.log("Error:" + error);
            })
    }, [])
  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>FullName</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    kntListUser.map((kntItem, index) => (
                        <tr>
                            <td>{kntItem.fullname}</td>
                            <td>{kntItem.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
