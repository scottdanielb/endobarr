import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './Sidebar.styled';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='acerca' onClick={toggle}>
            Acerca
          </SidebarLink>
          <SidebarLink to='equipo' onClick={toggle}>
            Endodoncia
          </SidebarLink>
          <SidebarLink to='servicios' onClick={toggle}>
            Servicios
          </SidebarLink>
          <SidebarLink to='testimonios' onClick={toggle}>
            Testimonios
          </SidebarLink>
          <SidebarLink to='contacto' onClick={toggle}>
            Contacto
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
