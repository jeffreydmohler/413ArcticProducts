import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'
//import Products from './products'

export default function Left(props) {
    
    let categories = {}
    //let total = 0
    const context = React.useContext(AppContext)
    console.log(context.categories)
    categories = context.categories
    
    console.log(context.products)
    for (const c of Object.values(categories)){
        c.total = 0
    }
    console.log(categories)
    for (const p of Object.values(context.products)){
        categories[p.category].total =   categories[p.category].total + 1
        console.log(categories[p.category].title + ':' + categories[p.category].total)
    }

   
    return (
        <div className = "float-left">
           
        <Nav defaultActiveKey="/" className="flex-column pt-3 text-left">
            
                <Link to="/" className="nav-link font-weight-bold">All Products ()</Link>

                 {/* {Object.entries(context.categories).sort().map( c => { */}
                {Object.entries(categories).sort().map( ([c]) => {
                    return (
                        <Link key={categories[c].id} className="nav-link" to={`/Category/${categories[c].title}`}>{categories[c].title} ({categories[c].id})</Link>
                    )
                })}
      </Nav>
      </div>
    )
}