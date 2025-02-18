import React from 'react'

export default function JsxExpression() {                       
    // Biến
    const name = "Kim Ngọc Tâm";

    // Biến đối tượng
    const user = {
        firstName: "Tâm",
        lastName: "Kim"
    }

    // Hàm
    const fullName = (user) => {
        return (
            <h2>{user.firstName} {user.lastName}</h2>
        );
    } 

    // Element
    const element = (
        <div>
            {/* Biểu thức JSX */}
            {fullName(user)}
            <hr />
            <h3>Welcome to, {name} </h3>
        </div>
    );

    // Hàm
    const sayWelcome = (name) => {
        if(name){
            return <h3>Welcome to, {name} </h3>
        }
        else{
            return <h3>Welcome to K23CNT2 - NTU</h3>
        }
    }

    return(
        <div>
            <h1>KNT - JSX Expression</h1>
            {/* Sử dụng biến element */}
            {element}
            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("ABC")}
        </div>
    )
}

