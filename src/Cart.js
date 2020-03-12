import React from 'react'
import { Table } from 'react-bootstrap'
import AppContext from './context'

export default function Cart(props) {

    const context = React.useContext(AppContext)

    return (
        <div className='text-secondary'>
            <h1 className="text-secondary">Shopping Cart</h1>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Extended</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(context.cart)}
                    {Object.entries(context.cart).map(([key, c]) => { 
                        {console.log(key, c)}
                        const prod = Object.values(context.products).find(x => x.id === key)
                        {console.log(key, c, prod)}
                        return (
                            <tr>
                                <th></th>
                                <th>{prod.name}</th>
                                <th>{c}</th>
                                <th>{prod.price}</th>
                                <th>{prod.price * c}</th>
                                <th></th>
                            </tr>
                        )}) }
                </tbody>
            </Table>
        </div>
    )
}