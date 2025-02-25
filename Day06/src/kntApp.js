import React, { Component } from 'react'
import KntEventForm1 from './components/kntEventForm1'
import KntEventForm2 from './components/kntEventForm2'
import KntEventForm3 from './components/kntEventForm3'
import KntEventForm4 from './components/kntEventForm4'
import KntEventForm5 from './components/kntEventForm5'

export default class KntApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1>Event Form - Demo</h1>
        <hr/>
        <><KntEventForm1 /></>
        <hr/>
        <><KntEventForm2 /></>
        <hr/>
        <><KntEventForm3 /></>
        <hr/>
        <><KntEventForm4 /></>
        <hr/>
        <><KntEventForm5 onSubmit={this.kntHandleSubmit}/></>
      </div>
    )
  }
}
