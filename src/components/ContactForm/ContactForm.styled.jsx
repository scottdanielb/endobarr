import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const FormButton = styled.button`
  background: #446ccd;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  width: 100%;
  border-radius: 50px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #fff;
    color: #446ccd;
    border: solid 1px;
    border-color: #446ccd;
    outline: 0;
    transition: all 0.2s ease-in-out;
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 95%;
  padding-bottom: 50px;

  ${(props) =>
    props.wrapper &&
    css`
      box-shadow: 0 0 20px 0 rgba(184, 22, 31, 0.3);
      > * {
        padding: 1em;
      }

      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        > * {
          padding: 2em;
        }
      }
    `}
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Input = styled.input`
  border: 1px solid #446ccd;
  padding: 1em;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  color: black;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  border: 1px solid #446ccd;
  padding: 1em;
  width: 100%;
`;

export const Title = styled.h1`
  color: black;
  font: 70px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 30px;

  @media (min-width: 700px) {
    text-align: center;
  }
`;

const WrapperCompanyInfo = styled.div`
  background: #446ccd;
  height: 109.2%;
`;

const CompanyName = styled.h3`
  margin: 0 0 1rem 0;
  text-align: center;
  color: #fff;
  font-weight: 800;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

const WrapperList = styled.ul`
  list-style: none;
  margin: 0 0 1rem 0;
  padding: 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
  @media (min-width: 700px) {
    text-align: left;
  }
`;

export const CompanyInfo = () => (
  <WrapperCompanyInfo>
    <CompanyName>Endobarr</CompanyName>
    <WrapperList>
      <li style={{ fontWeight: 'bold' }}>Dr. Daniel Barrera Lopez</li>
      <li>Av. Francisco I. Madero 723 1er Piso Colonia Centro</li>
      <li>CP 20000 Aguascalientes, AGS</li>
      <li>Telefono Fijo: (449) 916-2472</li>
      <li>Telefono Celular: (449) 494-0920</li>
      <li>contacto@endobarr.com</li>
    </WrapperList>
  </WrapperCompanyInfo>
);

const WrapperGrid = styled.div`
  ${(props) =>
    props.full &&
    css`
      grid-column: 1 / 3;
    `}
`;

export const ContactForm = () => {
  const [formData, updateFormData] = useState({
    nombre: '',
    compania: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const sendFeedback = (serviceID, templateID, variables) => {
    window.emailjs
      .send(serviceID, templateID, variables)
      .then((res) => {
        console.log('Correo fue enviado exitosamente');
      })
      .catch((err) => console.error('Ha ocurrido un error', err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Recibimos su mensaje y ya estamos trabajando en ello `);
    const templateID = 'endobarr_contact_form';
    const serviceID = 'service_ey0iqv8';
    sendFeedback(serviceID, templateID, {
      nombre: formData.nombre,
      compania: formData.compania,
      email: formData.email,
      telefono: formData.telefono,
      mensaje: formData.mensaje,
    });

    console.log(formData);
    // ... submit to email
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    updateFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h3 style={{ color: 'black' }}>Ponte en contacto</h3>
      <Form onSubmit={handleSubmit}>
        <WrapperGrid>
          <Label>Nombre</Label>
          <Input
            type='text'
            name='nombre'
            placeholder='Escriba su nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Compañia</Label>
          <Input
            type='text'
            name='compania'
            placeholder='Compañia'
            value={formData.compania}
            onChange={handleChange}
          />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Correo Electrónico</Label>
          <Input
            type='email'
            name='email'
            placeholder='Escriba su correo electrónico'
            value={formData.email}
            onChange={handleChange}
          />
        </WrapperGrid>
        <WrapperGrid>
          <Label>Numero Telefonico</Label>
          <Input
            type='tel'
            name='telefono'
            placeholder='Escriba su telefono'
            value={formData.telefono}
            onChange={handleChange}
          />
        </WrapperGrid>
        <WrapperGrid full>
          <Label>Escriba su mensaje</Label>
          <Textarea
            name='mensaje'
            rows='5'
            value={formData.mensaje}
            onChange={handleChange}
          ></Textarea>
        </WrapperGrid>
        <WrapperGrid full>
          <FormButton>Enviar</FormButton>
        </WrapperGrid>
      </Form>
    </div>
  );
};
