import { useState } from "react";
import "./components/style.scss";
import { Card } from "./components/Card";

// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
function validacaoNomeDaCor(nomeCor) {
  return nomeCor.trim().length > 2;
}

function validacaoCorHexadecimal(corHexadecimal) {
  // const padraoCorHexadecimal = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  const padraoCorHexadecimal = /^#(?:[0-9a-f]{3}){1,2}$/i;
  return padraoCorHexadecimal.test(corHexadecimal);
}

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeCor, setNomeCor] = useState("");
  const [numeroCor, setNumeroCor] = useState("");
  const [cores, setCores] = useState([]);
  const [formularioErro, setFormularioErro] = useState(false);

  const cadastrarCor = (event) => {
    event.preventDefault();
    let novoId = cores.length;
    //Validação da cor
    if (validacaoCorHexadecimal(numeroCor) && validacaoNomeDaCor(nomeCor)) {
      setFormularioErro(false);

      const novaCorCadastrada = {
        id: novoId,
        nome: nomeCor,
        hexadecimal: numeroCor,
      };
      setNomeCor("");
      setNumeroCor("");
      setCores([...cores, novaCorCadastrada]);
    } else {
      setFormularioErro(true);
    }
  };
  return (
    <>
      {/* Formulario       */}

      <div>
        <section className={`formInputs ${formularioErro ? "form-error" : ""}`}>
          <header className="tittle-wrapper">
            <h1>Adicionar nova cor</h1>
          </header>
          <form
            
            onSubmit={(event) => cadastrarCor(event)}
          >
            <section className="inputs-wrapper">
              <div>
                <label htmlFor="nomeCor">Nome da cor</label>
                <input
                  id="nomeCor"
                  type="text"
                  value={nomeCor}
                  onChange={(event) => setNomeCor(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="numeroCor">Cor (hexadecimal)</label>
                <input
                  id="numeroCor"
                  type="text"
                  value={numeroCor}
                  onChange={(event) => setNumeroCor(event.target.value)}
                />
              </div>
            </section>
            <button type="submit">Incluir cor</button>
          </form>
          {formularioErro ? (
            <span> Por favor, verifique os dados inseridos no formulário</span>
          ) : null}
        </section>
      </div>
      <div className="show">
        <header className="tittle-wrapper">
          <h1>Cores favoritas</h1>
        </header>
        <section className="cardsArea">
          {cores.map((cor) => (
            <Card key={cor.id} corData={cor} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
