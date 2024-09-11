import logo from './logo.svg';
import './App.css';
import { TrackGoogleAnalitycsEvent } from './analytics';
import { useState } from 'react';




function App() {
  const [total, setTotal] = useState(350.00); 
 

  const TrackWhatsAppClick = () => {
    TrackGoogleAnalitycsEvent('WhatsApp', 'Interaction', 'Clicked WhatsApp Button');
};

const handlePurchaseClick = () => {
  // Genera un número aleatorio entre 1 y 50 para cambiar el valor total
  const randomIncrement = (Math.random() * 50).toFixed(2);
  const newTotal = (parseFloat(total) + parseFloat(randomIncrement)).toFixed(2);

  // Actualiza el total con el nuevo valor
  setTotal(newTotal);

  // Asegúrate de enviar el nuevo valor del total a Google Analytics
  TrackGoogleAnalitycsEvent('Purchase', 'purchase', 'Purchase Event', parseFloat(newTotal));

  console.log(`Processing payment of $${newTotal}`);
};

const simulatePriceChange = () => {
  // Genera un número aleatorio entre 1 y 50
  const randomIncrement = (Math.random() * 50).toFixed(2);
  // Actualiza el total sumando el valor aleatorio al total actual
  setTotal((prevTotal) => (parseFloat(prevTotal) + parseFloat(randomIncrement)).toFixed(2));
};
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          probando analiticas de google
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={TrackWhatsAppClick}>click her</button>
        <h2>Total: ${total}</h2>
        <button onClick={() => 
        handlePurchaseClick(total)}>
        Simular Pago
      </button>
      </header>

      <a href="https://wa.me/522212311313" className="float" target="_blank" id="whatsapp-in-public" onClick={TrackWhatsAppClick}>
      <i className="fa fa-whatsapp my-float"></i>
    </a>
    </div>
  );
}

export default App;
