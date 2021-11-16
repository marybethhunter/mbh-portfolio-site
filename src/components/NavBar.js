import React from 'react';
// import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse,
  Nav,
} from 'reactstrap';
// import { signOutUser } from '../api/auth';

export default function NavBar() {
  return (
    <div>
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand href="/">Mary Beth Hunter</NavbarBrand>
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tech">Technologies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
            </Nav>
            {/* {user ? (
              <button type="button" onClick={signOutUser}>Sign Out!</button>
            ) : null } */}
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

// NavBar.propTypes = {
//   user: PropTypes.shape(PropTypes.obj),
// };

// NavBar.defaultProps = {
//   user: null,
// };
