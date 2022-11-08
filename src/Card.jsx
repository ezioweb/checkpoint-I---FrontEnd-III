//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card () {
  const corDeFundo = 'red'
  return (
    
       <>
      <header>
        <div className="dh-logo">         
        <h1 style={{backgroundColor: corDeFundo}}>Cores Favoritas</h1>

        </div>
      </header>
      <code>
      <div class="container">

<div class="child">
   <h3> Cor: #0fbf8b </h3>
   
</div>
<div class="child">
    <h3> Cor: Neon Lite Blue </h3>
</div>
<div class="child">
    <h3> Cor: Neon Purple </h3>
</div>
<div class="child">
    <h3> Cor: Juice Lime </h3>
</div>

</div>
      </code>
    </>
    
  )
}