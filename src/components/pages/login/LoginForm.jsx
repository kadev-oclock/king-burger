import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <form action="submit" onSubmit={handelSubmit}>
      {" "}
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connecter-vous</h2>
      <input
        value={inputValue}
        onChange={handelChange}
        type="text"
        placeholder="Entre votre prénom.."
        required
      />
      <button>Accéder à votre espace </button>
    </form>
  );
}
