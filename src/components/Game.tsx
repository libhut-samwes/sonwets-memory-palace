import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Gameboard from './Gameboard';
import Footer from './Footer';

class Tile {
	id: string = '';
	tileValue: string = "";
	defaultValue: string = '#000000';
	matched: boolean = false;
	clicked: boolean = false;
}
const randColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const tileChooser = (num: number) => {
	console.assert(num % 2 === 0, {num, errorMsg: 'number of tyles must be even'});
	let valueArr: string[] = [];
	while(valueArr.length < num){
		let r = randColor();
		if(valueArr.indexOf(r) === -1) valueArr.push(r);
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

function Game() {
	const [tileCount, setTileCount] = useState(0);
	const [tiles, setTiles] = useState<Tile[]>([]);
	const [turn, setTurn] = useState(0);
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);

	function gameOverToggle(bool: boolean) {
		setGameOver(bool);
	}
	function gameStartedToggle(num: number) {
		setGameStarted(true);
		const drawTiles = tileChooser(num / 2);
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
	return (
		<>
			<Navbar 
				gameStart={gameStartedToggle}
			/>
			<Gameboard
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
