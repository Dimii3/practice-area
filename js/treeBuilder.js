function treeBuilder(n) {
	//test
	if (Number.isInteger(n) && n > 0) {
		const tree = [];
		let stars = 1;
		for (let i = 1; i <= n; i++) {
			const newTreeBranch = new Array(stars).fill('*').join('');
			tree.push(newTreeBranch);
			console.log({ stars });
			stars = i >= 1 ? i - 1 + 2 : stars;
		}
		console.log(tree.join('\n'));
	} else {
		console.error(`${n} It has to be an integer`);
		return;
	}
}