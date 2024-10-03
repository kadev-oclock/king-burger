import { useState } from "react";


export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("bob");
    // comportement
    const handelSubmit = (event) => {
      event.preventDefault();
      setInputValue("");
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
  )
}
