import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MouseEvent } from 'react';
import './Navbar.css';

function Navbar(props: any) {
	const { ship, libraryToggle } = props
	let tileCount: number = 24;
	let library: string = 'urbit';
	const handleClick = (e: MouseEvent) => {
		props.gameStart(tileCount, library);
	}
	
const libraries = ['urbit', 'color'];
const defaultOption = libraries[0];
const handleSelect = (e: any) => libraryToggle(e.value);


	return (
		<div className="nav-bar">
			<p id="game-title">~sonwet's ~madlyn: the memory palace</p>
			<div id="dashboard">
				<Dropdown options={libraries} onChange={handleSelect} value={defaultOption} placeholder="Choose a tileset`" />
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
