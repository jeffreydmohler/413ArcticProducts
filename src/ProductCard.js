import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <Card className='text-primary'>        
            <Card.Img variant='top' src ={`/productimages/${props.product.filename}-1.png`}/>
            <Link to={`/product/${props.product.id}`} className='position-absolute btn btn-secondary' style={{right: 0}}>Details</Link>
            <Card.Body className="bg-secondary p-2 text-center"> 
                <Card.Title>{props.product.name}</Card.Title>
                <Card.Text style={{fontSize: 20}}>${parseFloat(props.product.price).toFixed(2)}</Card.Text>
            </Card.Body>
        </Card>
    )
}