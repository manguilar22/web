import React, { Component } from 'react';

import  {MemoryRouter,Route,Switch,NavLink} from "react-router-dom";

import {Navbar,Nav,NavDropdown,MenuItem,NavItem} from "react-bootstrap";

import Home from "./components/Home";
import DevOps from "./components/DevOps"; 

class App extends Component {
  render() {
    return (
        <MemoryRouter>
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Aguilar</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavDropdown eventKey={3} title={"Topics"} id={"basic-nav-dropdown"}>
                        <MenuItem evenKey={3.1}><NavLink to={"/"}>Home</NavLink></MenuItem>
                        <MenuItem eventKey={3.2}><NavLink to={"/DevOps"}>DevOps</NavLink></MenuItem>
                    </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href={"#"}>PIC.</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/DevOps"} component={DevOps}/>
          </Switch>
            </div>
        </MemoryRouter>
    );
  }
}

export default App;
