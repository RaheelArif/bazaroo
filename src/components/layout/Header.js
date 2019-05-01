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
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
      <div class="fixed-top ">
        <Navbar className="header " light expand="md">
          <NavbarBrand className="logo" href="/">BAZAAROO!</NavbarBrand>
          {/* <p>We are Launching Soon.......</p> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav cla className="ml-auto my-nav" navbar>
              <NavItem>
                <Link className="my-nav-link" href="/components/">Home</Link>
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