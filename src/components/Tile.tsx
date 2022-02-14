import { sigil, reactRenderer } from '@tlon/sigil-js';

function Tile(props: any) {
	const { library, index, patp, displayColor, incrementTurn, tileClickedToggle, matchHandler } = props;
	const clickHandler = () => {
		incrementTurn();
		tileClickedToggle(index);
		matchHandler(index);
	}

	function sigilMaker() {
	if(library === 'urbit') {
		return(
			sigil({
				patp: patp,
				renderer: reactRenderer,
				size: 100,
				colors: ['black', 'white']
			})
		);
	}
}

return (
			<div
				className='tile'
				style={{
					backgroundColor: displayColor
				}}
				onClick={clickHandler}
			>
				{sigilMaker()}
			</div>
		);
}

export default Tile;
