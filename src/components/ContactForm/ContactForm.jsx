import React from 'react';
import {
  Container,
  CompanyInfo,
  ContactForm,
  Title,
} from './ContactForm.styled';

const ContactFormSection = () => {
  return (
    <Container id='contacto'>
      <Title>Contacto</Title>
      <Container wrapper>
        <CompanyInfo />
        <ContactForm />
      </Container>
    </Container>
  );
};

export default ContactFormSection;
