import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './NavbarLogin';
import Footer from './Footer';
import { Link } from 'react-router-dom';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 300px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`

  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color:  #95818d;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #2C514C;
  }
`;
const RegisterLink = styled.a`
  color: #2C514C;
  text-decoration: none;
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #576066;
  }
`;

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <>
    <Navbar></Navbar>
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
      <RegisterLink ><Link to="/register">Don't have an account? Register now</Link></RegisterLink>
    </Container>
    <Footer></Footer>
    </>
    
  );
};

export default Login;