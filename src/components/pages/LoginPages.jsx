import { useState } from "react";

function LoginPages() {
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
  //affichage (render)

  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connecter-vous</h2>
      <form action="submit" onSubmit={handelSubmit}>
        <input
          value={inputValue}
          onChange={handelChange}
          type="text"
          placeholder="Entre votre prénom.."
          required
        />
        <button>Accéder à votre espace </button>
      </form>
    </div>
  );
}
export default LoginPages;
