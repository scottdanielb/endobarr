import React from 'react';
import {
  FooterContainer,
  FooterSubheading,
  FooterSubscription,
  WebsiteRights,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubheading>
          ¡La mejor salud bucal para ti y tu familia!
        </FooterSubheading>
      </FooterSubscription>
      <WebsiteRights>Derechos reservados Endobarr 2022 © </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
