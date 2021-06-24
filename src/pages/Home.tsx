import IllustrationImg from '../assets/images/illustration.svg';
import LogoImg from '../assets/images/logo.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração" />
                <strong>Cria salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={LogoImg} alt="Logo letmeask" />
                    <button className="create-room">
                        <img src={GoogleIconImg} alt="Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre e uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala" 
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}