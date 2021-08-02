import React from 'react';
import {  Container,
  Navbar,
  Nav,
  NavItem,
  NavLink, Button  } from 'reactstrap';
import { ChevronLeft, ArrowDown } from 'react-bootstrap-icons';
const CommonHeader = (props) => {

  return (
    <div className="header-bg">
      <Container fluid className="common-header">
        <Navbar light expand="md">
          <Nav className="mr-auto" navbar >
              <NavItem>
                  <ChevronLeft />
                </NavItem>
                <NavItem>
                  <NavLink className="common-header-color">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink> <Button className="head-button" >File</Button></NavLink>
                </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar style={{marginLeft: "1200px"}}>
                <NavItem>
                  <NavLink className="common-header-color">
                    <Button className="head-button" style={{backgroundColor: "#fff"}}>Save as draft</Button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink> <Button className="head-button" ><ArrowDown /></Button></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="common-header-color">
                    <Button className="head-button" >Exit</Button>
                  </NavLink>
                </NavItem>
            </Nav>
          </Navbar>
        </Container>
      </div>
  );
}

export default CommonHeader;