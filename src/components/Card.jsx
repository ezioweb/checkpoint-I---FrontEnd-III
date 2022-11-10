//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import "./style.scss";

export function Card(props) {


  
  const corFundo = props.corData.hexadecimal
  return (
    
    <div className="cardColor" style={{ backgroundColor: corFundo }}>
      <div className="cardShow">
        <h2>{props.corData.nome}</h2>
        <h3>{props.corData.hexadecimal}</h3>
      </div>
    </div>
  );
}