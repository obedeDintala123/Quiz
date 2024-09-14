import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import UserSignUp from "./UserSignUp.js"; // Importando o componente de inscrição
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topicos from "./Topicos.js";
import Biblia from "./biblia.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Rota para a página principal */}
      <Route path="/signup" element={<UserSignUp />} />{" "}
      {/* Rota para a página de inscrição */}
      <Route path="/categorias" element={<Topicos />} />{" "}
      <Route path="/categoria=biblia" element={<Biblia />}  />{" "}
    </Routes>
  </BrowserRouter>
);
