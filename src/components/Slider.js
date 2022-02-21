import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { mobile } from "../responsive";

const items = [
  {
    id: 1,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "Winter Collection",
    desc: "Hurry! its 50% off. Go and Check out all Winter Colletion",
  },
  {
    id: 2,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "Summer Collection",
    desc: "Hurry! its 50% off. Go and Check out all Winter Colletion",
  },
  {
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "Spring Collection",
    desc: "Hurry! its 50% off. Go and Check out all Winter Colletion",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow-x: hidden;
  ${mobile({ display: "none" })}
  &::-webkit-scrollbar {
    scrollbar-width: 0px;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgray;
  border-radius: 50%;
  opacity: 0.75s;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  cursor: pointer;
  z-index: 3;
`;

const Slide = styled.div`
  height: 100vh;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: coral;
  overflow-x: hidden;
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 80%;
`;

const ImageInfo = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const InfoTitle = styled.span`
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const InfoDesc = styled.span`
  font-size: 24px;
  letter-spacing: 2px;
  margin-bottom: 30px;
  max-width: 450px;
`;

const InfoButton = styled.button`
  height: 60px;
  width: 150px;
  padding: auto 10px;
  background-color: white;
  border: 1px solid gray;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const sliderIndexChanger = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex < items.length - 1 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items.length - 1);
    }
  };

  return (
    <>
      <Container>
        <Arrow direction="left" onClick={() => sliderIndexChanger("left")}>
          <ArrowLeft />
        </Arrow>
        <Slide sliderIndex={slideIndex}>
          {items.map((item) => (
            <Wrapper key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <ImageInfo>
                <InfoTitle>{item.title}</InfoTitle>
                <InfoDesc>{item.desc}</InfoDesc>
                <InfoButton>shop now</InfoButton>
              </ImageInfo>
            </Wrapper>
          ))}
        </Slide>
        <Arrow direction="right" onClick={() => sliderIndexChanger("right")}>
          <ArrowRight />
        </Arrow>
      </Container>
    </>
  );
};

export default Slider;
