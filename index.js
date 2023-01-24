class Index{
	// https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
	diagonalDifference(arr) {
		let ltr = 0;
		let rtl = 0;

		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr.length; j++) {
				if (i == j) {
					ltr += arr[i][j];
				}
				if ((i + j) == (arr.length - 1)) {
					rtl += arr[i][j];
				}
			}
		}
		return Math.abs(ltr - rtl)
	}

	// https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
	plusMinus(arr) {
		let positive = 0;
		let negative = 0;
		let zeros = 0;
		const arrLength = arr.length;

		for (let i = 0; i < arrLength; i++) {
			if (arr[i] >= 1) {
				positive++;
			} else if (arr[i] < 0) {
				negative++;
			} else {
				zeros++;
			}
		}
		console.log((positive / arrLength).toFixed(6));
		console.log((negative / arrLength).toFixed(6));
		console.log((zeros / arrLength).toFixed(6));
	}

	// https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
	staircase(n) {
		//process.stdout.write("hello: " + n);
		for(let i = 1; i <= n; i++) {
			for(let j = i; j < n; j++) {
				process.stdout.write(" ")
			}
			for(let k = 1; k <= i; k++) {
				process.stdout.write("#");
			}
			console.log("");
		}
	}

	// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
	miniMaxSum(arr) {
    	arr.sort();
		let max = 0;
		let min = 0;
		for(let i = 1; i < arr.length; i++) {
			max += arr[i];
		}
		for(let i = 0; i < arr.length - 1; i++) {
			min += arr[i];
		}
		console.log(min, max);
	}

	// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true
	birthdayCakeCandles(candles) {
		candles.sort((a, b) => {
			return b - a;
		});
		let total = 0;
		let lenght = candles.length;
		for(let i = 0; i < lenght; i++) {
			if(candles[0] == candles[i]) {
				total++;
			}
		}
		return total;
	}

}

const main = new Index();
// console.log(main.diagonalDifference([[-1, 1, -7, -8], [-10, -8, -5, -2], [0, 9, 7, -1], [4, 4, -2, 1]]));
// main.plusMinus([-4, 3, -9, 0, 4, 1]);
// main.staircase(6);
// main.miniMaxSum([1,3,5,7,9]);
// console.log(main.birthdayCakeCandles([4,3,4,2]));
console.log(main.bcc([1,3,4,3,4]));