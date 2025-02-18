import React, { Component } from 'react'

export default class KntClassComp extends Component {
    constructor(props){
        super(props);
        // Khởi tạo state
        this.state = {
            fullname: "Kim Ngọc Tâm",
            age: 20,
            phone: "0987422491",
        }
    }

    // Xử lý sự kiên
    changeInfo = () => {
        // Cập nhật state
        this.setState({fullname: "Tâm Kim", age: 35, phone: "0987456732"})
    }
  
    render() {
        let users = this.props.renderUsers;
        return (
            <div className='alert alert-success'>
                <h2>Trình bày dữ liệu từ state</h2>
                <p>Info State (Fullname): {this.state.fullname}</p>
                <p>Info State (Age): {this.state.age}</p>
                <p>Info State (Phone): {this.state.phone}</p>
                <hr/>
                <button className='btn btn-primary' onClick={this.changeInfo}>Change Info</button>
                <hr/>
                <h3>Lấy dữ liệu từ Props</h3>
                <p>Name: {this.props.renderName}</p>
                
                <p>Fullname: {users ? users.fullname : ''}</p>
                {/* <p>Age: {this.props.renderUsers.age}</p>
                <p>Phone: {this.props.renderUsers.phone}</p> */}
            </div>
        )
  }
}
