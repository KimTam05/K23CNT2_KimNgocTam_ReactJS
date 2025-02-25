import React, { Component } from 'react'

export default class KntEventForm5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kntName: '',
            kntAge: '',
            kntGender: 'Male',
            kntCourse: 'ReactJS',
        }
    }
    kntHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    kntHandleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${this.state.kntName}, Age: ${this.state.kntAge}, Gender: ${this.state.kntGender}, Course: ${this.state.kntCourse}`);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Student Info</h2>
        <form>
            <div>
                <label htmlFor='kntStudentName'>Name:</label>
                <input type="text" name='kntName' id='kntName'
                    value={this.state.kntName}
                    onChange={this.kntHandleChange}    
                />
            </div>
            <div>
                <label htmlFor='kntStudentAge'>Age:</label>
                <input type="text" name='kntAge' id='kntAge'
                    value={this.state.kntAge}
                    onChange={this.kntHandleChange}    
                />
            </div>
            <div>
                <label htmlFor='ktnStudentGender'>Gender:</label>
                <br/>
                <input type="radio" name='kntGender' id='kntMale'
                    value={'Male'}
                    onChange={this.kntHandleChange}    
                /><label htmlFor='kntMale'>Male</label>
            </div>
            <div>
                <input type="radio" name='kntGender' id='kntFemale'
                    value={'Female'}
                    onChange={this.kntHandleChange}    
                />
                <label htmlFor='kntFemale'>Female</label>
            </div>
            <div>
                <input type="radio" name='kntGender' id='kntOther'
                    value={'Other'}
                    onChange={this.kntHandleChange}    
                />
                <label htmlFor='kntOther'>Other</label>
            </div>
            <div>
                <label htmlFor='kntStudentCourse'>Course:</label>
                <select name='kntCourse' id='kntCourse'
                    value={this.state.kntCourse}
                    onChange={this.kntHandleChange}    
                >
                    <option value='HTML5'>HTML5</option>
                    <option value='CSS3'>CSS3</option>
                    <option value='JS'>JS</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
            </div>
            <button className='btn btn-primary' onClick={this.kntHandleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
