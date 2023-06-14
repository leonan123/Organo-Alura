import "./CampoTexto.css"

const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                required={props.obrigatorio}
                type="text"
                placeholder={props.placeholder}
                value={props.valor}
                onChange={(event) => props.aoAlterado(event.target.value)}
            />
        </div>
    )
}

export default CampoTexto;