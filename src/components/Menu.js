import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
function Menu() {
    //toggle
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar className='navbar navbar-expand-md navbar-dark fixed-top bg-dark' expand="md">
        
        <NavbarBrand href='/'>SE Store</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
            <Nav className='mr-auto' navbar>
                <NavItem>
                    <NavLink href='/home'>Product List</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href='/add'>add new Product</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Menu
