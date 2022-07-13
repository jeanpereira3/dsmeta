import logo from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>Desenvolvido por <a href="https://www.instagram.com/">@jean_azevedo93</a></p>
            </div>
        </header>
    )
}

export default Header
