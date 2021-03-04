module.exports = function reverse (n) {
	let b = Math.abs(n);
	let a = b.toString().split('').reverse().join('');
return a;
}

