import { useState } from "react";
import logo from "./Imagens/mobile.svg";
import Reload from "./Imagens/Reload.svg";
import "./biblia.css";
import { useNavigate } from "react-router-dom";

function QuizTerminado({ pontos, respostasCertas, respostasErradas }) {
  const userInitial = localStorage.getItem("userInitial");
  const navegate = useNavigate(); // Hook para redirecionar
  return (
    <div>
       <header className="header-biblia">
            <img src={logo} alt="logo" className="logo" />
            <div className="user-profile">
              <span className="user-text">{userInitial}</span>
            </div>
      </header>
      <div className="voltar-content">
            <button onClick={()=> navegate('/categorias')}>Voltar</button>
      </div>
      <div className="quizTerminado-container">
      <div className="pontuacao-content">
        <span>Pontuação</span>
        <span>{pontos}</span>
      </div>
      <div className="respostas-container">
        <div className="respostasCertas-content">
          <span>Respostas certas</span>
          <span>{respostasCertas}</span>
        </div>
        <div className="respostasErradas-content">
          <span>Respostas Erradas</span>
          <span>{respostasErradas}</span>
        </div>
      </div>
      <div className="buttonsReload">
        <img src={Reload} alt="RepetirQuiz" onClick={() => window.location.reload()}/>
        <button onClick={() => window.location.reload()}>
          Jogar Novamente
        </button>
      </div>
      </div>
    </div>
  );
}

function Biblia() {
  const [respostasCertas, setRespostasCertas] = useState(0);
  const [respostasErradas, setRespostasErradas] = useState(0);  
  const userInitial = localStorage.getItem("userInitial");
  const [quizTerminado, setQuizTerminado] = useState(false);
  const [selectOptions, setSelectOptions] = useState("");
  const [selectedButton, setSelectedButton] = useState(null); // Estado para rastrear o botão clicado
  let [pontos, setPontos] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navegate = useNavigate();

  const perguntas = [
    {
      pergunta: "Quem foi o primeiro homem criado por Deus?",
      opcoes: [
        { resposta: "Adão", name: "a" },
        { resposta: "Jonas", name: "b" },
        { resposta: "David", name: "c" },
      ],
      respostaCorreta: "a",
    },
    {
      pergunta: "Quem construiu a arca?",
      opcoes: [
        { resposta: "Noé", name: "a" },
        { resposta: "Moisés", name: "b" },
        { resposta: "Salomão", name: "c" },
      ],
      respostaCorreta: "a",
    },

    {
      pergunta: "Quem substituiu Eli como sacerdote em Israel?",
      opcoes: [
        { resposta: "Adão", name: "a" },
        { resposta: "Joel", name: "b" },
        { resposta: "Samuel", name: "c" },
      ],
      respostaCorreta: "c",
    },

    {
      pergunta: "Qual era a esposa de Ahab conhecida por sua idolatria?",
      opcoes: [
        { resposta: "Débora", name: "a" },
        { resposta: "Jezabel", name: "b" },
        { resposta: "Ruth", name: "c" },
      ],
      respostaCorreta: "b",
    },

    {
      pergunta:
        "Qual livro menciona a divisão da terra de Canaã entre as tribos de Israel?",
      opcoes: [
        { resposta: "Números", name: "a" },
        { resposta: "Genesis", name: "b" },
        { resposta: "Mateus", name: "c" },
      ],
      respostaCorreta: "a",
    },

    {
      pergunta: "Quem foi o pai de Naamã?",
      opcoes: [
        { resposta: "Josué", name: "a" },
        { resposta: "Pedro", name: "b" },
        { resposta: "Hazael", name: "c" },
      ],
      respostaCorreta: "c",
    },

    {
      pergunta: "Quais eram os três amigos de Daniel na fornalha?",
      opcoes: [
        { resposta: "João, Paulo, Jonas", name: "a" },
        { resposta: "Sadraque, Mesaque e Abede-Nego", name: "b" },
        { resposta: "Abrão, Samuel, Elias", name: "c" },
      ],
      respostaCorreta: "b",
    },

    {
      pergunta:
        "Qual é o nome do profeta que desafiou os profetas de Baal no Monte Carmelo?",
      opcoes: [
        { resposta: "Jonas", name: "a" },
        { resposta: "Eliseu", name: "b" },
        { resposta: "Elias", name: "c" },
      ],
      respostaCorreta: "c",
    },

    {
      pergunta:
        "Qual o nome do avô de Rei Davi mencionado na genealogia de Jesus em Mateus 1?",
      opcoes: [
        { resposta: "Obede", name: "a" },
        { resposta: "Salomão", name: "b" },
        { resposta: "Saul", name: "c" },
      ],
      respostaCorreta: "a",
    },

    {
      pergunta:
        "Qual versiculo diz: 'Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.'",
      opcoes: [
        { resposta: "João 3:16", name: "a" },
        { resposta: "Romanos 3:23", name: "b" },
        { resposta: "João 14:6", name: "c" },
      ],
      respostaCorreta: "c",
    },
  ];

  const resetButtonStyles = () => {
    const allButtons = document.querySelectorAll(".opcoes button");
    allButtons.forEach((button) => {
      button.style.background = ""; // Remove a cor de fundo
      button.style.color = ""; // Remove a cor do texto
    });
  };

  const perguntaAtual = perguntas[currentQuestion];

  const handleOptionClick = (e) => {
    setSelectOptions(e.target.name);
    setSelectedButton(e.target); // Define o botão clicado

    // Resetando o estilo de todos os botões
    resetButtonStyles();

    // Aplica estilo apenas ao botão clicado
    e.target.style.background = "#F2AC20";
    e.target.style.color = "#fff";
  };
  const Verificar = () => {
    if (!selectOptions) {
      alert("Por favor, escolha uma opção.");
      return;
    }

    if (selectOptions === perguntaAtual.respostaCorreta) {
      selectedButton.style.background="#00A783";
      setPontos((Prev) => (Prev += 10));
      setRespostasCertas((Prev) => Prev + 1);
    } else {
      selectedButton.style.backgroundColor = "red";

      setRespostasErradas((Prev) => Prev + 1);
      const correctButton = document.querySelector(
        `.opcoes button[name="${perguntaAtual.respostaCorreta}"]`
      );
      correctButton.style.backgroundColor = "#00A783";
      correctButton.style.color = "#fff";
    }

    // Vai para a próxima pergunta se houver
    if (currentQuestion < perguntas.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectOptions(""); // Reseta a opção selecionada
        setSelectedButton(null); // Reseta o botão selecionado
        resetButtonStyles();
      }, 1000); // Espera 1 segundo antes de ir para a próxima pergunta
    } else {
      setTimeout(() => {
        setQuizTerminado(true);
      }, 1000);
  }
}

  const Pular = () => {
    if (currentQuestion < perguntas.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectOptions("");
      resetButtonStyles();
    } else {
      setQuizTerminado(true);
    }

  };

  return (
    <>
      {quizTerminado ? (
        <QuizTerminado pontos={pontos} respostasCertas={respostasCertas} respostasErradas={respostasErradas}/>
      ) : (
        <div>
          <header className="header-biblia">
            <img src={logo} alt="logo" className="logo" />
            <div className="user-profile">
              <span className="user-text">{userInitial}</span>
            </div>
          </header>
          <div className="voltar-content">
            <button onClick={()=> navegate('/categorias')}>Voltar</button>
          </div>
          <div className="perguntas-container">
            <div className="pergunta1">
              <header className="pergunta-header">
                <span className="pontos">Pontos: {pontos}</span>
                <span>
                  {currentQuestion + 1} / {perguntas.length}
                </span>
              </header>
              <main className="main-bible">
                <span>{perguntaAtual.pergunta}</span>
                <div className="opcoes">
                  {perguntaAtual.opcoes.map((opcao, index) => (
                    <button key={index} name={opcao.name} onClick={handleOptionClick}>
                      {opcao.name}) {opcao.resposta}
                    </button>
                  ))}
                </div>
                <div className="pular-verficar-buttons">
                  <button className="verificar" onClick={Verificar}>
                    Verificar
                  </button>
                  <button className="pular" onClick={Pular}>
                    Pular
                  </button>
                </div>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Biblia;