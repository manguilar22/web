import React, { Component } from 'react';
import  {NavLink} from "react-router-dom";
import {Navbar,Nav,NavDropdown,MenuItem,NavItem} from "react-bootstrap";
import "../../css/Navigation.css";

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
                                    <MenuItem evenKey={3.1}><NavLink to={"/"}>Home</NavLink></MenuItem>
                                    <MenuItem divider/>
                                    <MenuItem eventKey={3.2}><NavLink to={"/DevOps"}>DevOps</NavLink></MenuItem>
                                    <MenuItem eventKey={3.3}><NavLink to={"/Cloud"}>Cloud</NavLink></MenuItem>
                                    <MenuItem eventKey={3.4}><NavLink to={"/Software"}>Software</NavLink></MenuItem>
                                    <MenuItem eventKey={3.5}><NavLink to={"/OS"}>Operating Systems</NavLink></MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1}>PIC.</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
        );
    }}

