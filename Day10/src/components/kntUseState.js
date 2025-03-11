import React, { useState } from "react";

export default function KntUseState() {
  const [kntCount, setKntCount] = useState(0);

  const kntArr = [10, 12, 20, 22];
  const [kntArray, setKntArray] = useState(kntArr);

  const kntStudents = [
    { kntID: "SV001", kntName: "Kim Tam", kntAge: 20 },
    { kntID: "SV002", kntName: "Nguyen Chanh", kntAge: 35 },
  ];
  const [kntStudentList, setKntStudentList] = useState(kntStudents);

  const kntHandleAddList = () => {
    setKntArray([...kntArray, parseInt(Math.random() * 100)]);
  };

  const kntHandleAddStudent = () => {
    const newStudent = {
      kntID: `SV00${kntStudentList.length + 1}`,
      kntName: "New Student",
      kntAge: Math.floor(Math.random() * 10) + 18,
    };
    setKntStudentList([...kntStudentList, newStudent]);
  };

  return (
    <div className="alert alert-danger">
      <h2>useState Demo</h2>

      {/* Tăng giảm count */}
      <div>
        <h3>Count: {kntCount}</h3>
        <button onClick={() => setKntCount(kntCount + 1)}>Tăng +</button>
        <button onClick={() => setKntCount(kntCount - 1)}>Giảm -</button>
      </div>

      {/* Hiển thị danh sách mảng */}
      <div>
        <h3>Array: {kntArray.toString()}</h3>
        <button onClick={kntHandleAddList}>Thêm phần tử</button>
      </div>

      {/* Danh sách sinh viên */}
      <div>
        <h3>Danh sách sinh viên</h3>
        <table className="table" border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {kntStudentList.map((kntItem, index) => (
              <tr key={index}>
                <td>{kntItem.kntID}</td>
                <td>{kntItem.kntName}</td>
                <td>{kntItem.kntAge}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={kntHandleAddStudent}>Thêm sinh viên</button>
      </div>
    </div>
  );
}
