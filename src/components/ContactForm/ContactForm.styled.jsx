import React from 'react';
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
      <li>Francisco I. Madero 102 Colonia Centro</li>
      <li>CP 20000 Aguascalientes, AGS</li>
      <li>Telefono Fijo: 449-996-2173</li>
      <li>Telefono Celular: 449-996-2173</li>
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

export const ContactForm = () => (
  <div>
    <h3 style={{ color: 'black' }}>Ponte en contacto</h3>
    <Form>
      <WrapperGrid>
        <Label>Nombre</Label>
        <Input type='text' name='name' />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Compañia</Label>
        <Input type='text' name='company' />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Correo Electronico</Label>
        <Input type='email' name='email' />
      </WrapperGrid>
      <WrapperGrid>
        <Label>Numero Telefonico</Label>
        <Input type='text' name='phone' />
      </WrapperGrid>
      <WrapperGrid full>
        <Label>Escriba su mensaje</Label>
        <Textarea name='message' rows='5'></Textarea>
      </WrapperGrid>
      <WrapperGrid full>
        <FormButton>Enviar</FormButton>
      </WrapperGrid>
    </Form>
  </div>
);
