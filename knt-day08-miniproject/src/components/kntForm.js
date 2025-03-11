// Class Child components which can edit the state
import React, { Component } from 'react'

export default class KntForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.kntItem,
        };
    }
  render() {
    
    return (
      <div className='card'>
        <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form action="" className="form-sample" onSubmit={this.kntHandleSubmit}>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Mã sinh viên</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control"  onChange={this.kntStudentOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Tên sinh viên</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control"  onChange={this.kntStudentOnChange}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Tuổi</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" onChange={this.kntStudentOnChange}/>
                    </div>
                </div>
                    
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Giới tinh</label>
                    <div className="col-sm-9">
                        <select name="kntGender" id="" className="form-control">
                            <option value={"Nam"} onChange={this.kntStudentOnChange}>Nam</option>
                            <option value={"Nữ"} onChange={this.kntStudentOnChange}>Nữ</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Ngày sinh</label>
                    <div className="col-sm-9">
                        <input type="date" name="" id="" className='form-control'/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Nơi sinh</label>
                    <div className="col-sm-9">
                        <select name="" id="" className='form-control'>
                            <option value="">Hà Nội</option>
                            <option value="">TP. Hồ Chí Minh</option>
                            <option value="">Đà Nẵng</option>
                            <option value="">Quảng Ninh</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="" className="col-sm-3 col-form-label">Địa chỉ</label>
                    <div className="col-sm-9">
                        <textarea className='form-control' style={{minHeight: '70px'}} rows="5"></textarea>
                    </div>
                </div>
                <button className='btn btn-primary me-2' type='submit'>Submit</button>
            </form>
        </div>
      </div>
    )
  }
}
