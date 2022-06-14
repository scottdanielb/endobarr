import React, { useState } from 'react';

import {
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroH3,
  Button,
  ArrowFoward,
  ArrowRight,
} from './HeroSection.styled';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroH1>Dr. Daniel Barrera Lopez</HeroH1>
        <HeroH3>
          Especialista en Tratamiento de Endodoncia con mas de 40 años de
          experiencia profesional
        </HeroH3>
        <HeroBtnWrapper>
          <Button to='acerca' onMouseEnter={onHover} onMouseLeave={onHover}>
            Mas Informacion {hover ? <ArrowFoward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
