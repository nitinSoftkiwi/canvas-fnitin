import React, { useState } from 'react';
import { Search, Cart, PersonFill } from 'react-bootstrap-icons';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header-bg">
    <Container>
      <Navbar light expand="md">
        <NavbarBrand href="/">
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt=""/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar style={{flexDirection: "row-reverse"}}>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Value Kits</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Track My Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Retail Wholesale</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><Search /> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><Cart /> </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"><PersonFill /> </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
    </div>
  );
}

export default Header;