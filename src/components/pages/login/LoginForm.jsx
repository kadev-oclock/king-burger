import { useState } from "react";
import { Link } from "react-router-dom";


export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("bob");
    // comportement
    const handelSubmit = (event) => {
      event.preventDefault();
      setInputValue(inputValue);
    };
    const handelChange = (event) => {
   setInputValue(event.target.value);
    };

    // render 
  return (
    <form action="submit" onSubmit={handelSubmit}>
      {" "}
      <h1>Bienvenue chez nous { inputValue }</h1>
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
      <Link href="/order">vers Orderpage</Link>
    </form>
  );
}
