import './Colaborador.css';
const Colaborador = ({nome, imagem, cargo, time, corPrimaria, corSecundaria}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor : corPrimaria}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h4>{cargo}</h4>
                <h4>{time}</h4>
                
            </div>
            
        </div>
    )
}
export default Colaborador;