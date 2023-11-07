import React from 'react'
import logo from './logo.svg';
import fb from './Facebook.png';
import ws from './WhatsApp.png';
import gm from './Gmail.png';
import Li from './LinkedIn.png';
import './estilo.css'


export default function Footer() {
    return (
        <footer class="pie-pagina">
            <div class="grupo-1">
                <div className="box">
                    <figure>
                        <a href="/">
                            <img src={logo} alt="Logo de Security A-T-MD"/>
                        </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Sobre nosotros</h2>
                    <p>Nuestra empresa es fabricante de un dispositivo capaz de detectar la presencia humana en un espacio determinado, medir la calidad del aire, la temperatura y, a través de una aplicación, puede interpretar los datos para dar diagnósticos del ambiente y saber qué hacer en dichas situaciones.</p>
                </div>
                <div className="box">
                    <h2>Contáctanos</h2>
                    <p className='tel'>Tel: +52 33 3058 5260</p>
                    <div className="red_social">
                        <a href="https://www.facebook.com/Jaraatmd?mibextid=ZbWKwL"><img src={fb}/></a>
                        <a href="https://wa.me/message/MCNENKQGQSC6M1"><img src={ws}/></a>
                        <a href="mailto:secur1ty.atmd@gmail.com"><img src={gm}/></a>
                        <a href="https://www.linkedin.com/company/security-a-t-md/"><img src={Li}/></a>
                    </div>
                </div>
            </div>
            <div class="grupo-2">
                <small>&copy; 2023 <b>Security A-T-MD</b> - Todos los derechos reservados.</small>
            </div>
        </footer>
    )
}
