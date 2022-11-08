export function Form(){
    const corDeFundo = 'blue'
    return(
       <>
       <div className="Form">
       <main className="formInputs">
     <form>
     <h1 style={{backgroundColor: corDeFundo}}>Adicionar nova cor</h1>
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
       </> 
    )
}