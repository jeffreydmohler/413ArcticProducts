import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'
//import Products from './products'

export default function Left(props) {
    
    let categories = {}
    let total = 0
    const context = React.useContext(AppContext)

    categories = context.categories
    
    //initialize total value in every category object
    for (const c of Object.values(categories)){
        c.total = 0
    }

    //count up the number of products in each category. add to total value.
    for (const p of Object.values(context.products)){
        categories[p.category].total =   categories[p.category].total + 1
        total++
    }

   
    return (
        <div className = "float-left">
           
        <Nav defaultActiveKey="/" className="flex-column pt-3 text-left">
            
                <Link to="/" className="nav-link font-weight-bold">All Products ({total})</Link>

                {Object.values(categories).sort().map( (c) => {
                    return (
                        <Link key={c.id} className="nav-link" to={`/Category/${c.title}`}>{c.title} ({c.total})</Link>
                    )
                })}
      </Nav>
      </div>
    )
}