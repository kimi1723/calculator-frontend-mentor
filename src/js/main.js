const themeRange = document.querySelector('.theme-box__range');
const theme = document.querySelector('body');
const themeListeners = ['click', 'keydown', 'touchend'];
const keys = document.querySelectorAll('.calc-keys__key');
let numberString = '',
	number = 0,
	result = 0,
	calculations = [];

const handleTheme = () => {
	setTimeout(() => {
		theme.dataset.theme = `theme-${themeRange.value}`;
	}, 1);
};

const handleResult = key => {
	key.preventDefault();

	if (key.target.classList.contains('calc-keys__key--number')) {
		numberString += key.target.textContent;
		number = parseInt(numberString);
	}

	if (key.target.classList.contains('calc-keys__key--add')) {
		calculations.push(number, '+');
		(number = 0), (numberString = '');

		console.log(calculations);
	}

	if (key.target.classList.contains('calc-keys__key--result')) {
		calculations.push(number);
		// calculations.forEach(calc => {
		// 	result += calc;
		// });
		// console.log(result);

		// for (const calc of calculations) {
		// 	result = calc;
		// }

		for (let i = 0, j = 0; i < calculations.length; i++) {
			result += j = calculations[i];
		}
		console.log(result);

		(number = 0), (result = 0), (calculations = []);
	}
};

handleTheme();
themeListeners.forEach(listener => {
	themeRange.addEventListener(listener, handleTheme);
});

keys.forEach(key => key.addEventListener('click', handleResult));
