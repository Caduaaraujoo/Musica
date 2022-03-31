import './style.css';
import logo from '../../assets/logo.svg'
import Profile from '../../assets/cadu.jpeg'

export default function Header() {
    return (
        <header>
            <img className='logo' src={logo} alt='logo' />
            <div className='container-welcome'>
                <img className='profile-img' src={Profile} alt='Foto' />
                <strong>Bem vindo, Cadu.</strong>

            </div>
        </header>
    )
}