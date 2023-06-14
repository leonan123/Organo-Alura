import './Time.css'

import Colaborador from '../Colaborador'

const Time = ({ time, colaboradores }) => {
    return (
        colaboradores.length > 0 &&
        <div className="time" style={{ backgroundColor: time.corSecundaria }}>
            <div>
                <h3>{time.nome}</h3>
                <span className='border' style={{ backgroundColor: time.corPrimaria }}></span>
            </div>
            <div className="colaborador-container">
                {colaboradores.map(colaborador => <Colaborador key={colaborador.nome} data={colaborador} corPrimaria={time.corPrimaria} />)}
            </div>
        </div>

    )
}

export default Time