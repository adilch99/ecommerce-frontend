import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import {login} from "../redux/apiCalls"
import { useDispatch, useSelector } from "react-redux";


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
  min-width: 30%;
  ${mobile({ width: "80%" })}
  background-color: white;
`;

const Title = styled.h1`
  font-weight: 400;
  margin-bottom: 20px;
`;

const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
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
  margin-bottom: 10px;
  cursor: pointer;
`;

const Login = () => {

  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const dispatch =useDispatch();
  const {isFetching, error} = useSelector(state => state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {email, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
          <Input placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </Form>
        <Button onClick={handleLogin} disabled={isFetching}>Login</Button>
        {error && <Aggrement style={{color: "red"}}>failed</Aggrement>}
        <Aggrement>Don't You Remember the Password?</Aggrement>
        <Aggrement>CREATE AN ACCOUNT</Aggrement>
      </Wrapper>
    </Container>
  );
};

export default Login;
