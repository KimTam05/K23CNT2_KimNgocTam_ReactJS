import React from 'react'

function parent(){
    return (
        <p>Hello Son</p>
    )
}

function children(){
    return (
        <parent />
    )
}

export default children