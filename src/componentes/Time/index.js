import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && <section className="time" style={{backgroundColor : props.corSecundaria}}>
            <h3 style={{borderColor : props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map(colaborador => (
                <Colaborador
                    corPrimaria={props.corPrimaria}
                    corSecundaria={props.corSecundaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    time={colaborador.time}
                />
            ))}
            </div>
        </section>
    )
}

export default Time;