import React from 'react';
import {
  Column1,
  Heading,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  Column2,
  ImgWrap,
  Img,
} from './EndoSection.styled';

const EndoSection = ({
  lightBg,
  id,
  headLine,
  description1,
  description2,
  img,
  imgStart,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <ImgWrap>
                  <Img src={img} />
                </ImgWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading>{headLine}</Heading>
                <Subtitle>{description1}</Subtitle>
                <Subtitle>{description2}</Subtitle>
              </TextWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default EndoSection;
