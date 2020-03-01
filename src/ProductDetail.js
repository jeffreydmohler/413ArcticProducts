import React from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'
import { useRouteMatch} from 'react-router-dom'
import AppContext from './context'
//import Products from './products'

export default function ProductDetail(props) {
    let match = useRouteMatch({
            path: "/product/:id",
            strict: true,
            sensitive: true
    })

    const context = React.useContext(AppContext)
    const Products = context.products

    let product = []
    product = Object.values(Products).find(x => x.id === parseInt(match.params.id))
    
    const[imgIdx, setImgIdx] = React.useState("1")

    if (product == null)
    {
        return (
            <div className="text-secondary">
                <h2 className="mt-5">Sorry, Product Was Not Found.</h2>
                <h3>Please try again.</h3>
            </div>
        )
    }
    else 
    {
        return (
            <Container className="text-secondary">
               <Row>
                    <Col md="8">
                    <h1 className="p-2">{product.name}</h1>
                    <p className="text-justify">{product.description}</p>
                    <h3 className="text-left">${parseFloat(product.price).toFixed(2)}</h3>
                    </Col>
                    <Col md="4">
                        <Image rounded src={`/productimages/${product.filename}-${imgIdx}.png`} className=" float-right mt-4" width="300px" height="300px"></Image>
                        <Row className="">
                            <Col></Col>
                            <Col> 
                                <Image rounded src={`/productimages/${product.filename}-1.png`} onMouseEnter={() => setImgIdx(1)} onMouseLeave={() => setImgIdx(1)} 
                                className="float-right mt-4 mb-4" width="30px" height="30px"></Image>
                            </Col>
                            <Col> 
                                <Image rounded src={`/productimages/${product.filename}-2.png`} onMouseEnter={() => setImgIdx(2)} onMouseLeave={() => setImgIdx(1)} 
                                className="float-right mt-4 mb-4" width="30px" height="30px"></Image>
                            </Col>
                            <Col> 
                                <Image rounded src={`/productimages/${product.filename}-3.png`} onMouseEnter={() => setImgIdx(3)} onMouseLeave={() => setImgIdx(1)} 
                                className="float-right mt-4 mb-4" width="30px" height="30px"></Image>
                            </Col>
                            <Col> 
                                <Image rounded src={`/productimages/${product.filename}-4.png`} onMouseEnter={() => setImgIdx(4)} onMouseLeave={() => setImgIdx(1)} 
                                className="float-right mt-4 mb-4" width="30px" height="30px"></Image>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}