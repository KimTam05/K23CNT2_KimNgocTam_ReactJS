import React, { Component } from "react";

class KntEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            kntSelectCheckBox:[""],
        }
    }
    // Hàm xử lý khi chọn checkbox
    kntHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        let selected = [...this.state.kntSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);
       
        this.setState({
            kntSelectCheckBox:selectedOptions
        });
    }

    kntHandleSubmit = (event)=>{
        alert('Fruits: ' + this.state.kntSelectCheckBox.join(', '));
        event.preventDefault();
    }

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form onSubmit={this.kntHandleSubmit}>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.kntSelectCheckBox.includes("Apple")}
              onChange={this.kntHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.kntSelectCheckBox.includes("Banana")}
              onChange={this.kntHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.kntSelectCheckBox.includes("Orange")}
              onChange={this.kntHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default KntEventForm4;