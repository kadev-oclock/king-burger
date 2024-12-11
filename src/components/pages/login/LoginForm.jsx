import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");

  
  // force un comportement de redirection
  const navigate = useNavigate();
  // comportement


  const handelSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };


  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  // render
  return (
    <LoginFormStyled action="submit" onSubmit={handelSubmit}>
      {" "}
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connecter-vous</h2>
      <div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon" />
          <input
            value={inputValue}
            onChange={handelChange}
            type="text"
            placeholder="Entre votre prénom.."
            required
          />
        </div>
        <button className="button-with-icon">
          <span>Accéder à votre espace </span>
          <IoChevronForward className="icon" />
        </button>
      </div>
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 8px;
  font-family: "Amatic SC", cursive;
  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
  }
  h2 {
    color: #8e8b8b;
    color: white;
    margin: 20px 10px 10px;
    font-size: 2.25rem;
  }
  .input-with-icon {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      color: #17161a;
      font-size: 15px;
    }
    &::placeholder {
      background: #fff;
      color: lightgrey;
    }
  }
  .button-with-icon {
    width: 100%;
    border: 1px solid red;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;

    &:hover:not(:disabled) {
      background-color: #fff;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }
    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }
    &:disabled {
      opacity:0.6;
      cursor:not-allowed;

    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: 15px;
      margin-left: 10px;
    }
  }
`;
