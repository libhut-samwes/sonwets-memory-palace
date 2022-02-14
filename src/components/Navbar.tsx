import { MouseEvent } from 'react';
import './Navbar.css';

function Navbar(props: any) {
	const { ship } = props
	let tileCount: number = 24;
	const handleClick = (e: MouseEvent) => {
		props.gameStart(24);
	}
	return (
		<div className="nav-bar">
			<p id="game-title">~sonwet's memory palace</p>
			<div>
				<a
					className="reset-btn"
					onClick={handleClick}
				>
					{ship} Wants To Play?
				</a>
			</div>
		</div>
	);
}

export default Navbar;
