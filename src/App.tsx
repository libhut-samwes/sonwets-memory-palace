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
	function visorCheck() {
		if(ship === '') {
			return(
				<>
					<p>Confirming you have a ship and aren't poor</p>
					<p>Need an <a href="https://urbit.live/">Urbit ID</a>?</p>
					<p>Need to install <a href="https://github.com/dcSpark/urbit-visor">Urbit Visor</a>? (Also in the <a href="https://chrome.google.com/webstore/detail/urbit-visor/oadimaacghcacmfipakhadejgalcaepg">Chrome Web Store</a>)</p>
				</>
			)
		}
		else if(ship) {
			return <Game ship={ship}/>
		}
	}
  return (
    <div className="App">
    	{visorCheck()}
		</div>
  );
}

export default App;
