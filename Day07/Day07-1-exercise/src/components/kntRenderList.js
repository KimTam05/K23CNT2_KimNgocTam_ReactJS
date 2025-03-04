import React, { Component } from 'react'

export default class KntRenderList extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            kntInitialState:[
                {kntID: 'P001', kntProductName: 'iPhone11', kntQuantity: 15, kntPrice: 1000},
                {kntID: 'P002', kntProductName: 'iPhone12', kntQuantity: 20, kntPrice: 1250},
                {kntID: 'P003', kntProductName: 'iPhone13', kntQuantity: 10, kntPrice: 1500},
                {kntID: 'P004', kntProductName: 'iPhone14', kntQuantity: 15, kntPrice: 2000},
            ],
        }
    }
  render() {
    let kntProducts = this.state.kntInitialState.map((kntItem, index) => {
        return(
            <tr key={index + 1}>
                        <th scope='row'>{kntItem.kntID}</th>
                        <td>{kntItem.kntProductName}</td>
                        <td>{kntItem.kntQuantity}</td>
                        <td>{kntItem.kntPrice}</td>
                        <td><button className='btn btn-danger'>Delete</button>
                            <button className='btn btn-primary mx-1'>Edit</button>
                        </td>
                    </tr>
        )
    })
    return (
      <div className='alert alert-info'>
        <h2>Danh sách sản phẩm</h2>
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {kntProducts}
            </tbody>
        </table>
      </div>
    )
  }
}
