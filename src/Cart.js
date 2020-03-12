import React from 'react'
import { Table, Image } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import AppContext from './context'

export default function Cart(props) {

    const context = React.useContext(AppContext)
    let bCart = false //boolean used to check if any non-undefined items in cart

    for (const c of Object.values(context.cart))
    {
        if (c !== undefined)
        {
            bCart = true
        }
    }

    if (bCart === false)
    { 
        return (
        <div className='text-secondary'>
            <h1 className="text-secondary">Shopping Cart</h1>
            <h2>There are no items in the cart</h2>
        </div>
        )
    }
    else
    {
        return (
            <div className='text-secondary'>
                <h1 className="text-secondary">Shopping Cart</h1>
                <Table hover>
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
                        {Object.entries(context.cart).filter(c => {
                            return c[1] !== undefined
                        }).map((c) => { 
                            const prod = Object.values(context.products).find(x => x.id === parseInt(c[0]))
                            return (
                                <tr key={prod.id}>
                                    <th><Image rounded src={`/productimages/${prod.filename}-1.png`} width="100px" height="100px"></Image></th>
                                    <th>{prod.name}</th>
                                    <th>{c[1]}</th>
                                    <th>{prod.price}</th>
                                    <th>{prod.price * c[1]}</th>
                                    <th><Link to={"/cart"} className='btn'  onClick={e=>{context.removeFromCart(prod.id)}} >Remove</Link></th>
                                </tr>
                            )}) }
                    </tbody>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Total</th>
                            <th></th>
                            <th></th>
                            <th>1082.05</th>
                            <th></th>
                        </tr>
                    </thead>
                </Table>
            </div>
        )
    }
}