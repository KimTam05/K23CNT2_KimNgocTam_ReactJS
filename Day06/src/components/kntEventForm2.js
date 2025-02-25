import React, { Component } from 'react'

export default class KntEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: 'CSS3'
        };
    };

    kntHandleChange = (event) => {
        this.setState({
            course: event.target.value
        });
    };

    kntHandleSubmit = (event) => {
        alert('Khóa học đã chọn: ' + this.state.course);
        event.preventDefault();
    };
  render() {
    return (
      <div className='alert alert-danger'>
        <h1 className='text-center'>Form Select</h1>
        <hr/>
        <form onSubmit={this.kntHandleSubmit}>
            <label htmlFor='kntSelectCourse'>
                Chọn khóa học:
                <select id='kntSelectCourse' name='kntSelectCourse'
                    value={this.state.kntSelectCourse}
                    onChange={this.kntHandleChange}>
                    <option value='HTML5'>HTML</option>
                    <option value='CSS3'>CSS</option>
                    <option value='JS'>JavaScript</option>
                    <option value='ReactJS'>ReactJS</option>
                </select>
            </label>
            <input type='submit' className='btn btn-primary' value='Submit'/>
        </form>
      </div>
    );
  }
}
