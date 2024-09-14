import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logoDeskTop from "./Imagens/Logo.svg";
import logoMobile from "./Imagens/mobile.svg";
import sectionImage from "./Imagens/Game day-amico (1) 2.svg";
import "./App.css";

function App() {

  const navigate = useNavigate(); // Hook para redirecionar

  const handlePlayClick = () => {
    navigate("/signup"); // Redireciona para a página de inscrição
  };

  
  useEffect(() => {
    document.body.style.background = '#fff'; // Cor de fundo para a página App

    return () => {
      document.body.style.backgroundColor = ''; // Remove o estilo ao desmontar o componente
    };
  }, []);


  return (
    <div className="container">
      <header className="app-header">
        <div className="logo-content">
          <img className="logoDesktop" src={logoDeskTop} alt="Logo" />
          <img className="logoMobile" src={logoMobile} alt="Logo" />
        </div>
      </header>
      <main className="app-main">
        <section className="content1">
          <span>
            Você está prestes a embarcar em uma jornada de conhecimento e
            diversão.
          </span>
          <div>
            <a href="#" onClick={handlePlayClick}>Jogar</a>
          </div>
        </section>
        <section className="content2">
          <img src={sectionImage} alt="Jogos" />
        </section>
      </main>
      <section className="mobile-content">
          <div className="text-mobile">
          <span>
            Você está prestes a embarcar em uma jornada de conhecimento e
            diversão.
          </span>
          </div>
          <div className="buttons-content">
            <a href="#" className="play" onClick={handlePlayClick}>Jogar</a>
            <a href="#" className="how-play">Como Jogar</a>
          </div>
        </section>
    </div>
  );
}

export default App;
