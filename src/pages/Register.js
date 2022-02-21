import React from "react";
import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 25px;
  width: 40%;
  ${tablet({ width: "80%" })}
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 20px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 10px;
  letter-spacing: 1px;
  font-size: 16px;
  margin: 0px 10px 15px 0px;
  outline: none;
`;

const Aggrement = styled.p`
  margin: 5px 10px 15px 0px;
  text-align: justify;
`;

const Button = styled.button`
  height: 50px;
  width: 120px;
  color: white;
  background: teal;
  border: none;
  letter-spacing: 1px;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </Form>
        <Aggrement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Aggrement>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
