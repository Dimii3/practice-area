const checkPalindrome = (palindrome) => {
	let ifPalin = '';
	if (typeof palindrome === 'number' || palindrome === '') {
		ifPalin = false;
		console.log(ifPalin);
		console.error(`${palindrome} It can't be empty string or number as well`);
		return;
	}
	{
		let reversedPalindrome = '';
		for (let i = palindrome.length - 1; i >= 0; i--) {
			reversedPalindrome += palindrome[i];
		}
		ifPalin = true;
		return console.log(palindrome == reversedPalindrome);
	}
};
