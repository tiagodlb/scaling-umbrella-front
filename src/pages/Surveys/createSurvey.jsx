import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./../../assets/icons/logo-scaling-umbrella-base 1 (2).png";
import { ThreeDots } from "react-loader-spinner";

import useLogin from "../../hooks/api/useLoginUser";
import UserContext from "../../context/userContext";

export default function CreateSurvey() {
  const [name, setName] = useState("");
  const [estimation, setEstimation] = useState("");
  const [usageRate, setUsageRate] = useState("");
  const machineSeries = "n1" //fixo
  const [virtualCpuCount, setVirtualCpuCount] = useState("");
  const [memorySizeGb, setMemorySizeGb] = useState("");
  const region = "us-central1" //fixo
  const [loading, setLoading] = useState(false);

  const user = "Welcome, Makiba!";
  const message = `Welcome, ${user.name}!`;
  const navigator = useNavigate();
  //   const handleRegister = async (login) => {
  //     await loginUser({
  //       email: email,
  //       password: password,
  //     });
  //   };
  return (
    <>
      <Container>
        <Section>
          <Logo>
            <img src={logo} />
            Scaling Umbrella
          </Logo>
          <Menu>
            <Link
              to={"/home"}
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Surveys
            </Link>
            <Link
              to={"/create/survey"}
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Create
            </Link>
            <Link
              to={"/user"}
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Account
            </Link>
          </Menu>
        </Section>
        <Main>
          <SurveyContainer>
            <h2>Create a new Survey</h2>
            <form>
              <input
                type="text"
                value={name}
                placeholder="Survey Name"
                onChange={(e) => setName(e.target.value)}
              />
              <select
                type="text"
                value={estimation}
                onChange={(e) => setEstimation(e.target.value)}
              >
                <option>100000s</option>
                <option>150000s</option>
                <option>200000s</option>
                <option>250000s</option>
                <option>300000s</option>
                <option>350000s</option>
                <option>400000s</option>
                <option>450000s</option>
                <option>500000s</option>
                <option>550000s</option>
                </select>
              <select
                type="text"
                value={usageRate}
                onChange={(e) => setUsageRate(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
                <select
                type="text"
                value={virtualCpuCount}
                onChange={(e) => setVirtualCpuCount(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
                <select
                type="text"
                value={memorySizeGb}
                onChange={(e) => setMemorySizeGb(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
              <button type="submit">Submit</button>
            </form>
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
    width: 200.24px;
    height: 110.75px;
  }

  width: 1000px;
  height: 150px;
  font-family: "Jockey One";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 89px;
  text-align: right;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 152px;
  top: 0px;
`;

const Menu = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: "Jockey One";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 89px;
  text-align: right;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  margin-top: 152px;
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

const SurveyContainer = styled.section`
  width: 110rem;
  height: 45rem;
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

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  input {
    width: 715px;
    height: 30px;
    padding: 10px;
    border: 0px;
    margin-top: 10px;
    margin-left: 50px;
    background: #e8e6e6;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
  }
  select {
    width: 735px;
    height: 40px;
    padding: 10px;
    border: 0px;
    margin-top: 10px;
    margin-left: 50px;
    background: #e8e6e6;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
  }
  button {
    margin-top: 20px;
    border: 0px;
    background: rgba(169, 50, 64, 0.85);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    font-family: "Jockey One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 67px;
    text-align: right;

    color: #ffffff;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    width: 337px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signUp {
    margin: 10px;
    line-height: 20px;
    font-family: "Jockey One";
    font-style: normal;
  }
  ThreeDots {
    witdh: 10px;
  }

  p {
    font-family: "Jockey One";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 45px;
    text-align: right;

    color: #e1e1e1;
  }
`;
