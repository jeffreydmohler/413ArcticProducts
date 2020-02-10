import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link} from 'react-router-dom'

export default function Top(props) {
    return ( 
        <Navbar className="">
   
          <i className="fas fa-store p-2 text-secondary float-left" style={{
              fontSize: "4rem", 
            }}></i> 
            
            <Navbar.Brand href="/" style={{fontSize: "2rem"}} className="">
                Artic Products
            </Navbar.Brand>
            <Nav defaultActiveKey="/" style={{fontSize: "1.25rem"}} className="align-bottom">
                <Nav.Item>
                    <Link to="/" className='text-secondary mr-4'>Home </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/about" className='text-secondary mr-4'>About </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/help" className='text-secondary mr-4'>Help </Link>
                </Nav.Item>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <NavDropdown title='Hello Jeffrey Mohler'>
                        <NavDropdown.Item>View Profile</NavDropdown.Item>
                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Text>
            </Navbar.Collapse>
            
        </Navbar>   
    )
}