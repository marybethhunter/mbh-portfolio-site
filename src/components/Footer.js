import React from 'react';
import { Navbar, Collapse, NavLink } from 'reactstrap';
import { signInUser } from '../api/auth';

export default function Footer() {
  return (
    <div>
      <div>
        <Navbar color="light" expand="md" fixed="bottom" light>
          <Collapse navbar>
            <NavLink onClick={signInUser}>
              Copyright © Mary Beth Hunter 2021
            </NavLink>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}
