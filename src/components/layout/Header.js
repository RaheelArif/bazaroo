import React from 'react';
import SignedOutLinks from "./SignoutLinks";
import SignedOutLinks2 from "./SignoutLink2";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  
   } from 'reactstrap';
   import logo from './logo.png';


export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="fixed-top ">
        <Navbar className="header " light expand="md">
          <NavbarBrand className="logo" href="/"><img src={logo} alt="Bazaroo"/></NavbarBrand>
          {/* <p>We are Launching Soon.......</p> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  className="ml-auto my-nav" navbar>
              <NavItem>
                <Link className="my-nav-link" to="/">Home</Link>
              </NavItem>
              <NavItem>
                <SignedOutLinks />
              </NavItem>
              <NavItem>
                <SignedOutLinks2/>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}