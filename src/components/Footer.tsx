function Footer(props: any) {
	const { turn } = props;
	const tipJar = <div>
									<p>Tip Jar:</p>
									<p>ETH/WSTR: <a href="https://etherscan.io/address/0xc196adc73cbf4ac19f8a7aa4058b1e7c281add2f">0xC196aDc73cbf4ac19F8A7AA4058B1E7C281add2F</a></p>
									<p>BTC: <a href="https://link.trustwallet.com/send?address=bc1qy9gtafu5m5k4mtq0xq8mvp5qnj0npud6zcg74j&asset=c0">bc1qy9gtafu5m5k4mtq0xq8mvp5qnj0npud6zcg74j</a></p>
									<p>Lightning: <a href="bitcoin:bc1qee3ke0xkqzn24pkrdyrwvs7zykpnvuvjwrprvm">bc1qee3ke0xkqzn24pkrdyrwvs7zykpnvuvjwrprvm</a></p>
									<p>Powered by Urbit.Media and dcSpark's Urbit Visor</p>
								 </div>
	if(turn > 0) {
		return (
			<>
				<p>Guesses: {Math.floor(turn / 2)}</p>
				{tipJar}
			</>
		)
	}
	else {
		return <>{tipJar}</>
	}
}

export default Footer;
