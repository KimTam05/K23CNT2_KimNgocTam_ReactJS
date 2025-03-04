import React, { Component } from 'react'
import KntLoginControl from './components/kntLoginControl'
import KntRenderList from './components/kntRenderList'
import KntRenderListStudent from './components/kntRenderListStudent'

export default class KntApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1>Kim Ngọc Tâm - Render condition, List Key</h1>
        <hr/>
        <><KntLoginControl /></>
        <><KntRenderList /></>
        <><KntRenderListStudent /></>
      </div>
    )
  }
}
