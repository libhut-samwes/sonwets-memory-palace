import { MouseEvent } from 'react';
import './Navbar.css';

function Navbar(props: any) {
	let tileCount: number = 24;
	const handleClick = (e: MouseEvent) => {
		props.gameStart(24);
	}
	return (
		<div className="nav-bar">
			<p id="game-title">Memory</p>
			<div>
				<a
					className="reset-btn"
					onClick={handleClick}
				>
					Reset
				</a>
			</div>
		</div>
	);
}

export default Navbar;
