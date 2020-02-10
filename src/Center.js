import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from './products'
import ProductCard from './ProductCard'
import { useRouteMatch } from 'react-router'

export default function Center(props) {
    let match = useRouteMatch({
        path: "/Category/:id",
        strict: true,
        sensitive: true
    })

    return (
        <div>
            
            <div>
                <h1 className="text-secondary text-center">Welcome to Artic Products!</h1>
                <Row>

                {Object.values(Products).filter(p => { 
                    if (match != null)
                    {
                        return (
                            p.category === match.params.id)
                    }        
                    else 
                    {
                        return p
                    }}).map((p => 
                    {
                        return (                       
                            <Col md="3" className="p-4" key={p.id}>                           
                                <ProductCard  product = {p} />
                            </Col> )}))}
                </Row>
            </div>
        </div>

    )
}