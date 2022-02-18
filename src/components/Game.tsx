import { useState } from 'react';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Gameboard from './Gameboard';
import Footer from './Footer';
const ob = require('urbit-ob');

class Tile {
	id: string = '';
	tileValue: string = "";
	defaultValue: string = '#000000';
	matched: boolean = false;
	clicked: boolean = false;
}

// put value randomizers for different tile libraries here
const availableLibraries: string[] = ['color', 'urbit'];
const randPatp = () => ob.patp(Math.floor(Math.random() * 4228250625).toString());
const randColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const tileChooser = (num: number, library: string) => {
	console.assert(num % 2 === 0, {num, errorMsg: 'number of tyles must be even'});
	console.assert(availableLibraries.indexOf(library) !== -1, {library, errorMsg: 'not a valid library'});
	let valueArr: string[] = [];
	while(valueArr.length < num){
		let value: string = ''
		if(library === 'color') {
			value = randColor();
		}
		else if(library === 'urbit') {
			value = randPatp();
		}
		if(valueArr.indexOf(value) === -1) valueArr.push(value);
	}
	let doubledArr = valueArr.concat(valueArr);
	let shuffledArr = doubledArr.map((value) => ({value, sort: Math.random()}))
															.sort((a,b) => a.sort - b.sort)
															.map(({ value }) => value);
	let tileArray = []
	for (let i in shuffledArr) {
		const tile = new Tile();
		tile.id = i;
		tile.tileValue = shuffledArr[i];
		tile.defaultValue = '#000000';
		tile.matched = false;
		tile.clicked = false;
		tileArray.push(tile);
	}
	return tileArray;
}

function Game(props: any) {
	const [tileCount, setTileCount] = useState(24);
	const [library, setLibrary] = useState('urbit');
	const [tiles, setTiles] = useState<Tile[]>([]);
	const [turn, setTurn] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);

	function tileCountToggle(num: number) {
		console.log(tileCount)
		setTileCount(num);
		console.log(tileCount)
	}
	function libraryToggle(lib: string) {
		console.log(lib)
		setLibrary(lib);
	}
	function gameOverToggle(bool: boolean) {
		setGameOver(bool);
	}
	function gameStartedToggle(num: number) {
		setGameStarted(true);
		const drawTiles = tileChooser(tileCount / 2, library);
		setTiles(drawTiles);
		
	}
	function incrementTurn() {
		setTurn(turn + 1);
	}
	function tileClickedToggle(i: number) {
		const arr = tiles;
		arr[i].clicked = !arr[i].clicked;
		setTiles(arr);
	}
	function tileMatchedToggle(i: number) {
		const arr = tiles;
		arr[i].matched = true;
		setTiles(arr);
	}
	function welcomeHandler() {
		if(!gameStarted && !gameOver) {
			return (
				<Welcome 
					gameStart={gameStartedToggle}
					libraryToggle={libraryToggle}
					library={library}
					tileCount={tileCount}
					tileCountToggle={tileCountToggle}
				/>
			)
		}
	}
	function gameReset() {
		setGameStarted(false);
		setTiles([]);
	}
	return (
		<>
			<Navbar 
				gameStarted={gameStarted}
				gameReset={gameReset}
				gameOver={gameOver}
			/>
			{welcomeHandler()}
			<Gameboard
				library={library}
				tiles={tiles}
				incrementTurn={incrementTurn}
				tileClickedToggle={tileClickedToggle}
				tileMatchedToggle={tileMatchedToggle}
			/>
			<Footer 
				turn={turn}
			/>
		</>
	);
}

export default Game
