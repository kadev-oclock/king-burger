import styled from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

function LoginPages() {
  //affichage (render)

  return (
    <LoginPageStyled>
      <Logo/>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ::before {
    content: "";
    background: url("/images/burger-background.jpg")rgba(0,0,0,0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode:darken;
    

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:-1
  }
`;

export default LoginPages;
