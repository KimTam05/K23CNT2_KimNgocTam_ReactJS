import React from "react";

const kntCompInfo = () => {
  const info = {
    name: "Kim Ngọc Tâm",
    birthday: "01/01/2005",
    phone: "0987422491",
    class: "K23CNT2",
  };
  return (
    <div>
        <h1>Thông tin cá nhân</h1>
        <p>Name: {info.name}</p>
        <p>Birthday: {info.birthday}</p>
        <p>Phone: {info.phone}</p>
        <p>Class: {info.class}</p>
    </div>
    );
};

export default kntCompInfo;