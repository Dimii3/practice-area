const treeBuilder = (n) => {
	const coreArr = [];
	let stars = 1;
	if (Number.isInteger(n) && n > 0) {
		for (let i = 1; i <= n; i++) {
			const newTreeBranch = new Array(stars).fill('*').join('');
			console.log({ i });
			console.log({ stars });
			let space = ' '.repeat(n - (i - 1));
			coreArr.push(space + newTreeBranch);
			stars = i >= 1 ? stars + 2 : stars;
		}
		console.log(coreArr.join('\n'));
		return coreArr;
	} else {
		console.error(`${n} is not an integer`);
		return;
	}
};

