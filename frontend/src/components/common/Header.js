import React from 'react';
//import {Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = () => {
  return (

      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Goals</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/"> Tracks</NavItem>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/"> </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      //
      // <nav>
      //   <IndexLink to="/" activeClassName="active"> Home </IndexLink>
      //   {" | "}
      //   <Link to="/about" activeClassName="active">About </Link>
      //   {" | "}
      //   <Link to="/authors" activeClassName="active">Authors</Link>
      //   {" | "}
      //   <Link to="/courses" activeClassName="active"> Courses </Link>
      //   {loading && <LinkDots interval={100} dots={20}/>}
      // </nav>
  );
};

export default Header;