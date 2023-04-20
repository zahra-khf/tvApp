import React from "react";
import styled from "styled-components";

interface CardProps {
  title: string;
  body: string;
  image?: string;
}

const CardContainer = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin: 20px;
`;

const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`

  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardBody = styled.p`
  font-size: 18px;
  color: #444;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const Card: React.FC<CardProps> = ({ title, body, image }) => {
  return (
    <CardContainer>
      {image && <CardImage src={image} alt={title} />}
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
    </CardContainer>
  );
};

export default Card;
