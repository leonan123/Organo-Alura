import './Colaborador.css'

const Colaborador = ({ data, corPrimaria }) => {
    const { nome, cargo, imagem } = data
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{ backgroundColor: corPrimaria }}>
                <div className='cabecalho-imagem' style={{ backgroundImage: `URL("${imagem}")` }}></div>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador