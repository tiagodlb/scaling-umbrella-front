import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./../../assets/icons/logo-scaling-umbrella-base 1 (2).png";
import { ThreeDots } from "react-loader-spinner";

import useLogin from "../../hooks/api/useLoginUser";
import UserContext from "../../context/userContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [survey, setSurvey] = useState([]);
  const user = "Welcome, Makiba!";
  const message = `Welcome, ${user.name}!`;
  const navigator = useNavigate();

  return (
    <>
      <Container>
        <Section>
          <Logo>
            <img src={logo} />
            Scaling Umbrella
          </Logo>
          <Menu>
            <Link to={"/home"} style={{ textDecoration: "none",   color: "#ffffff" }}>Surveys</Link>
            <Link to={"/create/survey"} style={{ textDecoration: "none",   color: "#ffffff" }}>Create</Link>
            <Link to={"/user"} style={{ textDecoration: "none",   color: "#ffffff" }}>Account</Link>
          </Menu>
        </Section>
        <Main>
          <Welcome>{user}</Welcome>
          <SurveyContainer>
            <h2>Latest Surveys</h2>
            <Info>
              <p>Name</p>
              <p>Description</p>
              <p>Created At</p>
            </Info>
            {survey.map((survey) => (
                  <SurveyData key={survey.id} survey={survey} />
                ))}
          </SurveyContainer>
        </Main>
      </Container>
    </>
  );
}

const Container = styled.main`
  width: 98.5vw;
  height: 98vh;
  background-color: #322d2d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 12rem;
    height: 6.6rem;
  }

  width: 70rem;
  height: 9rem;
  font-family: "Jockey One";
  font-style: normal;
  font-weight: 400;
  font-size: 3.84rem;
  line-height: 5.34rem;
  text-align: right;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 9rem;
  top: 0px;
`;

const Menu = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Jockey One";
  font-style: normal;
  font-weight: 400;
  font-size: 2.52rem;
  line-height: 5.34rem;
  text-align: right;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 15rem;
  background: linear-gradient(
      0deg,
      rgba(000, 000, 157, 0.03),
      rgba(157, 157, 157, 0.03)
    ),
    rgba(188, 255, 255, 0.33);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Welcome = styled.h1`
  font-family: "Ruda";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  /* identical to box height */
  text-align: center;

  color: #252525;
`;

const SurveyContainer = styled.section`
  width: 1330px;
  height: 540px;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow: scroll;

  h2 {
    font-family: "Ruda";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;
    text-align: center;

    color: #252525;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Ruda";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  color: #000000;
`;

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
