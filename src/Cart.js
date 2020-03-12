import React from 'react'
import { Table, Image } from 'react-bootstrap'
import { Link} from 'react-router-dom'
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
                    {console.log(context.products)}
                    {Object.entries(context.cart).filter(c => {
                        return c[1] !== undefined
                    }).map((c) => { 
                        {console.log(c[0], c[1])}
                        const prod = Object.values(context.products).find(x => x.id === parseInt(c[0]))
                        {console.log(c[0], c[1], prod)}
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
            </Table>
        </div>
    )
}