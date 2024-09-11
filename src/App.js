import logo from './logo.svg';
import './App.css';
import { TrackGoogleAnalitycsEvent } from './analytics';
import { useState } from 'react';




function App() {
  const [total, setTotal] = useState(100.00); 
  const handleTestClick = () => {
    // Aquí llamas a la función de seguimiento de eventos
    TrackGoogleAnalitycsEvent('Button', 'Click', 'Prueba Button');
  };

  const TrackWhatsAppClick = () => {
    TrackGoogleAnalitycsEvent('WhatsApp', 'Interaction', 'Clicked WhatsApp Button');
};

const handlePurchaseClick = (total) => {
  TrackGoogleAnalitycsEvent('Purchase', 'purchase', 'Purchase Event', total);
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
        <button onClick={() => handlePurchaseClick(total)}>
                    Simular Pago
                </button>
      </header>

      <a href="https://wa.me/522212311313" className="float" target="_blank" id="whatsapp-in-public" onClick={handleTestClick}>
      <i className="fa fa-whatsapp my-float"></i>
    </a>
    </div>
  );
}

export default App;
