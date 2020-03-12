import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Container, Row, Col} from 'react-bootstrap'
import Top from './Top'
import Bottom from './Bottom'
import Left from './Left'
import Right from './Right'
import Center from './Center'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './About'
import Help from './Help'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="">
          <Container fluid className="min-vh-100 d-flex flex-column">
            <Row>
                <Col className="bg-primary"> 
                  <Top/>
                </Col>
            </Row>
            <Row className=" flex-grow-1">
              <Col className="bg-secondary" md="2">
                <Left/>
              </Col>
              <Col className="bg-success" md="8">
                    <Switch>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/help">
                            <Help/>
                        </Route>
                        <Route path="/product/">
                            <ProductDetail/>
                        </Route>
                        <Route path="/cart/">
                            <Cart/>
                        </Route>
                        <Route path="/">
                            <Center/>
                        </Route>      
                    </Switch>                           
              </Col>
              <Col className="bg-info" md="2">
                <Right/>
              </Col>
            </Row>
            <Row className="bg-primary">
                <Col  className="bg-primary">
                  <Bottom/>
                </Col>
            </Row>
          </Container>
      </header>
    </div>
    </Router>
  );
}

export default App;
