import logo from "./Imagens/mobile.svg";
import "./Topicos.css";
import { useNavigate } from "react-router-dom";

function Topicos() {
  const userInitial = localStorage.getItem('userInitial');
  const navigate = useNavigate();
  function redirection(){
    navigate('/categoria=biblia');
  }

  function noSelection(){
     window.alert("Apenas a categoria 'Bíblia' está disponivel no momento");
  }

  return (
    <div>
      <header className="header-topicos">
        <img src={logo} alt="logo" className="logo"/>
        <div className="user-profile">
          <span className="user-text">
            {userInitial}
          </span>
        </div>
      </header>
      <article className="topicos-container">
        <h1>Categorias</h1>
        <span>Selecione a categoria que você gostaria de explorar</span>
        <section className="topicos-content">
          <div className="bible-content">
            <span>Bíblia</span>
            <button onClick={redirection}>Jogar</button>
          </div>
          <div className="cultura-content">
            <span>Cultura Geral</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
          <div className="tecno-content">
            <span>Ciência e Tecnologia</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
        </section>

        <section className="topicos-content">
          <div className="desporto-content">
            <span>Desporto</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
          <div className="literatura-content">
            <span>Literatura</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
          <div className="mile-content">
            <span>Mitos e Lendas</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
        </section>

        <section className="topicos-content">
          <div className="filmes-content">
            <span>Filmes</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
          <div className="gastro-content">
            <span>Gastronomia</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
          <div className="animais-content">
            <span>Animais</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
        </section>

        <section className="topicos-content-end">
          <div className="geo-content">
            <span>Geografia</span>
            <button onClick={noSelection}>Jogar</button>
          </div>
          <div className="personalizar-content">
            <span onClick={noSelection}>Personalizar</span>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Topicos;
