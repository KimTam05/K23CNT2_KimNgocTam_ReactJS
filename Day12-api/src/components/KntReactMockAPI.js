import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function KntReactMockAPI() {
    const [kntMockData, setKntMockData] = useState([]);

    const MockAPI = "https://67d8d81100348dd3e2a86846.mockapi.io/knt-2310900094/MockData"
    useEffect(() => {
        axios
        .get(MockAPI)
        .then((kntResponse) => {
            setKntMockData(kntResponse.data)
        })
        .catch((error) => {
            console.log("API URL:", MockAPI);
            console.log("Error:" + error);
        })
    }, []);
  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>FullName</td>
                    <td>Age</td>
                    <td>Active?</td>
                </tr>
            </thead>
            <tbody>
                {
                    kntMockData.map((kntItem, index) => (
                        <tr>
                            <td>{kntItem.id}</td>
                            <td>{kntItem.name}</td>
                            <td>{kntItem.age}</td>
                            <td>{kntItem.is_active === true ? "Hoạt động" : "Khóa"}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}
