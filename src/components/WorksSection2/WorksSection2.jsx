import React from 'react';
import { IconContext } from 'react-icons/lib';
import { BiPhoneCall, BiLocationPlus } from 'react-icons/bi';
import { FiClock } from 'react-icons/fi';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  WorksCardText,
  WorksCardSubText,
} from './WorksSection2.styled';

function Pricing() {
  return (
    <IconContext.Provider
      value={{ color: '#0c1223', size: 64, cursor: 'pointer' }}
    >
      <PricingSection id='acerca'>
        <PricingWrapper>
          <PricingHeading>Acerca</PricingHeading>
          <PricingContainer>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiPhoneCall />
                </PricingCardIcon>
                <PricingCardPlan>Telefono</PricingCardPlan>
                <WorksCardText>Telefono Fijo: </WorksCardText>
                <WorksCardSubText>(449) 916-2472</WorksCardSubText>
                <WorksCardText>Telefono Celular: </WorksCardText>
                <WorksCardSubText>(449) 718-8470</WorksCardSubText>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <BiLocationPlus />
                </PricingCardIcon>
                <PricingCardPlan>Ubicación</PricingCardPlan>
                <WorksCardText>
                  Calle Francisco I. Madero Colonia Centro Aguascalientes, Ags
                  CP#20000
                </WorksCardText>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FiClock />
                </PricingCardIcon>
                <PricingCardPlan>Horario y Citas</PricingCardPlan>
                <WorksCardText>Unicamente con previa cita.</WorksCardText>
                <WorksCardSubText>
                  Lunes a Viernes de 10:00 AM a 7:00 PM
                </WorksCardSubText>
                <WorksCardSubText>
                  Sabado de 10:00 AM a 4:00 PM
                </WorksCardSubText>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
