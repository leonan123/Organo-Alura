import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape' style={{ backgroundImage: `URL('./images/fundo.png')` }}>
            <div className="rodape-item">
                <ul className="social">
                    <li><img src="./images/fb.png" alt="facebook" /></li>
                    <li><img src="./images/tw.png" alt="twitter" /></li>
                    <li><img src="./images/ig.png" alt="instagram" /></li>
                </ul>
            </div>
            <div className="rodape-item">
                <img src="./images/logo.png" alt="Logo da organo" />
            </div>
            <div className="rodape-item">
                <p>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape