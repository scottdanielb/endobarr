import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';
import { Avatar } from '@mui/material';

import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';

const Testimonial = () => {
  return (
    <div
      id='testimonios'
      className='testimonial'
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 75,
        paddingTop: 75,
      }}
    >
      <div style={{ width: '85%' }}>
        <h1 style={{ textAlign: 'center', color: 'black' }}>Testimonios</h1>
        <Slider autoplay='true' autoplaySpeed='100'>
          <Card
            img={testimonial1}
            text='Acudí por un tratamiento en mi segundo molar y mi experiencia fue de lo mejor, el doctor me explico todo el procedimiento y lo mejor de todo fue que no senti dolor despues del tratamiento!'
            name='MELISSA ESCOBAR ESCOBEDO'
          />
          <Card
            img={testimonial2}
            text='Excelente doctor, tiene muchos aparatos novedosos como la radiografia digital y un laser terapeutico para minimizar la inflamacion y dolor. Super recomendado.'
            name='LAURA LOPEZ SANTILLANA'
          />
          <Card
            img={testimonial3}
            text='La verdad que el doctor tiene mano de santo. No me dolio nada el tratamiento! Super atento el doctor y con bastante experiencia y conocimientos.'
            name='ALEJANDRO GONZALEZ FERNANDEZ'
          />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, text, name }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: 30,
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: '50%' } }}
        src={img}
        style={{
          width: 140,
          height: 140,
          border: '1px solid lightgray',
          padding: 7,
        }}
      />
      <p style={{ marginTop: 50, fontSize: 28, width: '80%' }}>{text}</p>
      <p
        style={{
          fontWeight: 600,
          color: '#446ccd',
          fontStyle: 'italic',
          marginTop: 25,
          fontSize: 16,
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default Testimonial;
