import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #f8f8f8;
`;

const Text = styled.p`
  font-size: 16px;
  color: #555555;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Text>&copy; 2023 watched. All rights reserved.</Text>
    </Container>
  );
};

export default Footer;
