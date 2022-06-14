import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavWrapper,
} from './Navbar.styled';

const Navbar = ({ toggle }) => {
  return (
    <>
      <NavWrapper>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>endobarr</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='acerca'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={20}
                >
                  {' '}
                  Acerca{' '}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='endodoncia'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={20}
                >
                  {' '}
                  Endodoncia{' '}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='testimonios'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={20}
                >
                  {' '}
                  Testimonios{' '}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contacto'> Contacto </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </NavWrapper>
    </>
  );
};

export default Navbar;
