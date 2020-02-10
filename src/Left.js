import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Products from './products'

export default function Left(props) {
    
    const categories = {}
    let total = 0
    for (const p of Object.values(Products)){
          
        const current = (categories[p.category] || 0)
        categories[p.category] = current + 1
        total = total + 1
    }

    return (
        <div className = "float-left">
        <Nav defaultActiveKey="/" className="flex-column pt-3 text-left">
            
                <Link to="/" className="nav-link font-weight-bold">All Products ({total})</Link>

                 {Object.entries(categories).sort().map( c => {
                    return (
                        <Link key={c[0]} className="nav-link" to={`/Category/${c[0]}`}>{c[0]} ({c[1]})</Link>
                    )
                })}
      </Nav>
      </div>
    )
}