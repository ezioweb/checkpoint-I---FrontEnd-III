import { Card } from './Card'
import { Form } from './Form'
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs


  return (
    
   <>
    <div className="Form">
       <main className="formInputs">
     <form>
     <h1 >Adicionar nova cor</h1>
     <div>
              <label nomeCor>Nome da cor</label>
              <input
                id="nomeProduto"
                type="text"
                value=""                
              />
            </div>
            <div>
              <label precoProduto>Número da cor</label>
              <input
                id="precoProduto"
                type="text"
                value="Hexadecial"
                />
            </div>
           
            <button type="submit">Incluir cor</button>
      {/* Comece a desenvolver o seu Código por aqui :) */}      
     </form>
     </main>
       </div>
    
    <Card />
   
  </>
    
  )
}

export default App