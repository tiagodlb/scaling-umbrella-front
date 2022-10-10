import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "./../../assets/icons/logo-scaling-umbrella-base 1 (2).png";
import { ThreeDots } from "react-loader-spinner";

import useCreateUser from "../../hooks/api/useCreateUser";
import { postUser } from "../../services/user";


export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { loadingCreatingUser, createUser, creatingUserError } = useCreateUser();
    const [loading, setLoading] = useState(false);
  
    const navigator = useNavigate();
  
    const handleRegister = async (login) => {
      login.preventDefault()
      await postUser({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });

      navigator("/");
    };
  
    useEffect(() => {
      if (creatingUserError) {
        alert("Error! Please try again later.");
      }
    }, [creatingUserError]);
  
    if (loadingCreatingUser) {
      return <div>Loading...??</div>;
    }
  
    return (
      <>
        <Container>
          <Section>
            <Logo>
              <img src={logo} />
              Scaling Umbrella
            </Logo>
            <form>
              <input
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
  
              <button type="submit" onClick={handleRegister}>
                {loadingCreatingUser ? (
                  <ThreeDots heigth="50" width="50" color="white" />
                ) : (
                  "Register"
                )}
              </button>
            </form>
            <div className="signUp">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <p>Already have an account? Sign in here!</p>
              </Link>
            </div>
          </Section>
        </Container>
      </>
    );
  }
  
  const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #322d2d;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const Logo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 233.24px;
      height: 150.75px;
    }
  
    width: 1000px;
    height: 150px;
    font-family: "Jockey One";
    font-style: normal;
    font-weight: 400;
    font-size: 94px;
    line-height: 131px;
    text-align: right;
  
    color: #ffffff;
  
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;
  
  const Section = styled.section`
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
      background: #E8E6E6;
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
    
    p{
      font-family: 'Jockey One';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 45px;
      text-align: right;
  
      color: #E1E1E1;
    }
  `;
  