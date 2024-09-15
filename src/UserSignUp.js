import "./UserSignUp.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./Imagens/mobile.svg";
import api from "./Services/api.js";

function UserSignUp() {
  const inputName = useRef();
  const inputPassword = useRef();
  const navegate = useNavigate();
  const [showSignIn, setShowSignIn] = useState(false);
  async function createUser(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário de recarregar a página
    const userNameValue = inputName.current.value;
    const userPasswordValue = inputPassword.current.value;
    if (userNameValue.length < 8) {
      alert("O nome de usuário deve ter pelo menos 8 caracteres.");
      return;
    }

    if (userPasswordValue.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    try {
      const response = await api.post("/signup", {
        name: userNameValue,
        password: userPasswordValue,
      });
      console.log("User created:", response.data);

      localStorage.setItem("userInitial", userNameValue.charAt(0));

      navegate("/categorias");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const messageError = error.response.data.error;
        if (messageError === "Senha incorreta") {
          alert("Senha incorreta.");
        } else {
         setShowSignIn(true);
        }
      } else {
        console.error("Error creating user:", error);
      }
    }
  }

  return (
    <div className="container-SignUp">
      {showSignIn ? (
        (localStorage.setItem("userInitial", inputName.current.value.charAt(0)),
        navegate("/categorias"))
      ) : (
        <>
          <div className="logo-content">
            <img src={logo} alt="logo" />
          </div>
          <form onSubmit={createUser}>
            <div className="username-content">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="example123"
                name="username"
                id="username"
                required
                ref={inputName}
                minLength={8}
              />
            </div>
            <div className="password-content">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Example@123"
                required
                ref={inputPassword}
                minLength={8}
              />
            </div>
            <button className="continuar-button" type="submit">
              Continuar
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default UserSignUp;
