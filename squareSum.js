/**
 * Square(n) Sum
 * @param  {[array]} numbers
 * @return {[number]}
 */
function squareSum(numbers){
	return numbers.reduce((sum, current) => sum + (current**2), 0);
}

console.log(squareSum([4,0,3,-7]));

