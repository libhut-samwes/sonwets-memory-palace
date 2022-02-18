import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MouseEvent } from 'react';
import './Welcome.css';

function Welcome(props: any) {
	const { library, tileCount, libraryToggle, tileCountToggle, gameStart } = props
	const handleClick = (e: MouseEvent) => {
		gameStart();
	}
	
const libraries = ['urbit', 'color'];
const defaultLibrary = libraries[0];
const handleLibrarySelect = (e: any) => libraryToggle(e.value);

const difficulties = ['Easy: ~mydwyt-kommet', 'Normal: ~sampel-palnet', 'Hard: ~virryl-strlrd', '~zod mode'];
const defaultDifficulty = difficulties[1];
const handleDifficultySelect = (e: any) => tileCountToggle((difficulties.indexOf(e.value) + 1) * 16); // dropdown is buggy and don't care to figure it out'

	return (
		<div className="welcome">
			<h3>You up for it?</h3>
			<div id="options">
				<Dropdown 
					className="dropdown"
					options={libraries} 
					onChange={handleLibrarySelect} 
					value={library} 
					placeholder="Choose a tileset"
				/>
				<Dropdown
					className="dropdown"
					options={difficulties}
					onChange={handleDifficultySelect}
					value={difficulties[tileCount / 16 - 1]}
					placeholder="Choose difficulty"
				/>
				<a
					className="start-btn"
					onClick={handleClick}
				>
					Shall we?
				</a>
			</div>
		</div>
	);
}

export default Welcome;
