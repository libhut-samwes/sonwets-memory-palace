function Tile(props: any) {
	const { index, displayColor, incrementTurn, tileClickedToggle, matchHandler } = props;
	const clickHandler = () => {
		incrementTurn();
		tileClickedToggle(index);
		matchHandler(index);
	}
	return (
		<div
			className='tile'
			style={{
				backgroundColor: displayColor
			}}
			onClick={clickHandler}
		/>
	);
}

export default Tile;
