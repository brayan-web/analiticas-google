import logo from './logo.svg';
import './App.css';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
const TRACKING_ID = 'G-KEV0Q9Z80R'
const handleWhatsAppClick = (event) => {
  event.preventDefault();
  console.log("WhatsApp button clicked");
  ReactGA.event({
    category: 'Button',
    action: 'click',
    label: 'whatsapp_button'
  });
  window.open('https://wa.me/527861345980', '_blank');
}




function App() {
  useEffect(() => {
      ReactGA.initialize(TRACKING_ID)
  }, [])

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
      </header>

      <a href="https://wa.me/522212311313" className="float" target="_blank" id="whatsapp-in-public" onClick={handleWhatsAppClick}>
      <i className="fa fa-whatsapp my-float"></i>
    </a>
    </div>
  );
}

export default App;
