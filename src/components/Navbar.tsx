import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MouseEvent } from 'react';
import './Navbar.css';

function Navbar(props: any) {
	const { gameStarted, gameReset, gameOver } = props
	
	function gameStartedHandler() {
		if(gameStarted && !gameOver) {
			return (
			<div id="dashboard">
				<a className="reset-btn" onClick={gameReset}>Rage Quit</a>
			</div>
			);
		}
	}
	return (
		<div className="nav-bar">
			<p id="game-title">~sonwet's ~madlyn: the memory palace</p>
			{gameStartedHandler()}
		</div>
	);
}

export default Navbar;
