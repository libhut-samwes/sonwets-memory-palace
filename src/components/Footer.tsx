function Footer(props: any) {
	const { turn } = props;
	if(turn > 0) {
		return <p>Guesses: {Math.floor(turn / 2)}</p>
	}
	else {
		return <></>
	}
}

export default Footer;
