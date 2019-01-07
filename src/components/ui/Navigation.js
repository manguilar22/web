import React, { Component } from 'react';
import  {NavLink} from "react-router-dom";
import {Navbar,Nav,NavDropdown,MenuItem} from "react-bootstrap";

export default class Navigation extends Component {
    render() {
        return (
                <div>
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a id={"brandName"} href={"/"}>Aguilar</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown eventKey={3} title={"Topics"} id={"basic-nav-dropdown"}>
                                    <MenuItem eventKey={3.1}><NavLink to={"/"}>Home</NavLink></MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem eventKey={3.2}><NavLink to={"/DevOps"}>DevOps</NavLink></MenuItem>
                                    <MenuItem eventKey={3.4}><NavLink to={"/Software"}>Software</NavLink></MenuItem>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        );
    }}

