import { useState, useEffect } from 'react';
import { urbitVisor } from '@dcspark/uv-core';
import Game from './components/Game';
import './App.css';

function App() {
  const [ship, setShip] = useState('');
  useEffect(() => {
		urbitVisor.require(['shipName'], setData);
	}, []);
	function setData() {
  	urbitVisor.getShip().then((res) => setShip(res.response));
	}
	console.log(ship)
  return (
    <div className="App">
			{ship ? <Game ship={ship}/> : <p>Confirming you have a ship and aren't poor</p>}
    </div>
  );
}

export default App;
