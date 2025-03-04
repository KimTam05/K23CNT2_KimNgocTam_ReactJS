import React, { Component } from 'react'
import KntLogoutComp from './kntLogoutComp'
import KntLoginComp from './kntLoginComp'

export default class kntLoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
    }
  render() {
    let {isLoggedIn} = this.state
    let ktnComponent = isLoggedIn ? <KntLoginComp /> : <KntLogoutComp />
    return (
      <div className='alert alert-primary'>
          {ktnComponent}
          <button className='btn btn-primary' onClick={() => {
              this.setState({
                  isLoggedIn: !isLoggedIn,
              })
          }}>
              {isLoggedIn ? 'Logout' : 'Login'}
          </button>
      </div>
    )
  }
}
