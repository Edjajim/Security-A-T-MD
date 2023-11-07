import './App.css';
import Footer from './Footer';
import Header from './Header';
import org from './Organigrama.jpg';
import bg from './bg.jpeg';
import './estiloCo.css';

function Nosotros() {
  return (
    <div className="App">
      <Header/>
      <body className='body'>
        <h2>Conoce el organigrama de nuestra empresa</h2>
        <img src={org} width='100%'/>
        <h2>Nuestra misión</h2>
        <p>En nuestro compromiso con la seguridad y bienestar, nos dedicamos a salvaguardar 
hogares y entornos laborales a través de tecnologías avanzadas e innovadoras. 
Nuestra misión es proporcionar mediciones en tiempo real de la calidad del aire, 
temperatura y otros factores clave para garantizar un ambiente saludable y seguro. 
Impulsados por la innovación y la excelencia, nos esforzamos por ofrecer soluciones 
que brinden tranquilidad, promoviendo así un entorno donde vivir y trabajar sea 
siempre óptimo y protegido.</p>
        <br/>
        <h2>Visión</h2>
        <p>Vislumbramos un futuro donde nuestra empresa sea reconocida por garantizar la 
seguridad  de  tu  entorno.  Nos  proyectamos  como  pioneros  en  la  innovación 
tecnológica, ofreciendo soluciones de vanguardia que redefinen los estándares de 
seguridad en el hogar y el lugar de trabajo. Buscamos ser la referencia en la 
monitorización en tiempo real de la calidad del aire de tu entorno y la protección 
ante  presencia  humana,  contribuyendo  así  a  la  construcción  de  comunidades 
resilientes y protegidas. Nos visualizamos como agentes del cambio, promoviendo 
un mundo donde la seguridad y el bienestar son pilares fundamentales en la vida 
cotidiana.</p>
        <br/>
        <h2>Nuestros valores</h2>
        <ol type='A'>
            <li>Innovación</li>
            <li>Integridad</li>
            <li>Excelencia</li>
            <li>Respeto</li>
            <li>Comunicación abierta</li>
            <li>Compromiso con el cliente</li>
            <li>Colaboración</li>
            <li>Adaptabilidad</li>
            <li>Seguridad</li>
            <li>Aprendizaje continuo</li>
        </ol>
      </body>
      <Footer/>
    </div>
  );
}

export default Nosotros;
