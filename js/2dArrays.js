const treeBuilder = (n) => {
	const coreArr = [];
	const whiteSpace = ' ';
	const star = '*';
	let stars = 1;
	if (!Number.isInteger(n) && n > 0) {
		console.error(`${n} is not an integer`);
		return;
	} else {
		for (let i = 1; i <= n; i++) {
			const newTreeBranch = new Array(stars).fill(star).join('');
			let space = whiteSpace.repeat(n - (i - 1));
			coreArr.push(space + newTreeBranch);
			stars = i >= 1 ? stars + 2 : stars;
		}
		console.log(coreArr.join('\n'));
		return coreArr;
	}
};
