import './App.css';
import Footer from './Footer';
import Header from './Header';
import ens from './ens160.jpg';
import ld from './LD2410.jpg';
import litio from './Litio.jpg';
import './estiloCo.css';

function Tec() {
    return (
        <div className="App">
            <Header />
            <body>
                <p>Nuestro producto innovador cuenta con la siguiente tecnología</p>
                <div className='grupo'>
                    <div className="box">
                        <h3>Sensor de la calidad del aire</h3>
                        <p>Optamos por el ENS160 + AHT21 por su capacidad para medir CO<sub>2</sub>, un componente vital en la calidad del entorno, y su precisión en la monitorización de datos ambientales.</p>
                    </div>
                    <div className="box">
                        <img src={ens}/>
                    </div>
                </div>
                <div className='grupo'>
                    <div className="box">
                        <h3>Sensor de presencia</h3>
                        <p>​El sensor de presencia LD2410 contribuye al dispositivo al detectar la presencia de personas u objetos, lo que puede ser útil en aplicaciones de seguridad y automatización del hogar.</p>
                    </div>
                    <div className="box">
                        <img src={ld}/>
                    </div>
                </div>
                <div className='grupo'>
                    <div className="box">
                        <h3>Recargable</h3>
                        <p>​Las pilas de iones de litio recargables ofrecen una solución sostenible y de larga duración en comparación con las pilas desechables convencionales.</p>
                    </div>
                    <div className="box">
                        <img src={litio}/>
                    </div>
                </div>
            </body>
            <Footer />
        </div>
    );
}

export default Tec;
