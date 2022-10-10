import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Survey(props) {
  const { survey } = props;
  return (
    <SurveyData key={survey.id}>
      <Link to={`/product/${survey.id}`}>
        <Name>{survey.name}</Name>
        <Description>{survey.description}</Description>
        <CreatedAt>{survey.createdAt}</CreatedAt>
      </Link>
    </SurveyData>
  );
}

const SurveyData = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  border-width: 2px 0px;
  border-style: solid;
  border-color: #a9a9a9;
  margin-bottom: 75px;

  p {
    font-family: "Ruda";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 44px;
    text-align: center;
  }
`;

const Name = styled.p`
  margin-right: 2rem;
`;
const Description = styled.p`
  margin-right: 0.5rem;
`;
const CreatedAt = styled.p`
  margin-left: 1rem;
`;
