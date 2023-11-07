import './App.css';
import Footer from './Footer';
import Header from './Header';
import Carousel from './Carousel';
import './estiloCo.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <body className='body'>
        <h2>"Desde la calidad del aire hasta cada movimiento, tu entorno siempre seguro"</h2>
        <hr/>
        <br/>
        <h3>LMAQ-P</h3>
        <p>Un aparato de seguridad eficiente, accesible y de calidad, altamente capaz de detectar partículas dañinas para el ser humano en un entorno, y que a su vez tiene la capacidad de detectar presencia humana en una zona de interés, con una gran e intuitiva interfáz de uso.</p>
        <img src=""/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;
