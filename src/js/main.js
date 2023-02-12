const themeRange = document.querySelector('.theme-box__range');
const theme = document.querySelector('body');
const themeListeners = ['click', 'keydown', 'touchend'];
const keys = document.querySelectorAll('.calc-keys__key');
const actionSign = ['+', '-', '/', '*'];
let numberString = '',
	number = 0,
	result = 0,
	calculations = [],
	prev = 0,
	curr = 0;

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
		console.log(calculations.at[-1]);
	}

	if (key.target.classList.contains('calc-keys__key--add')) {
		calculations.push(number, '+');
		(number = 0), (numberString = '');
	}

	if (key.target.classList.contains('calc-keys__key--subtract')) {
		calculations.push(number, '-');

		(number = 0), (numberString = '');
	}

	if (key.target.classList.contains('calc-keys__key--result')) {
		calculations.push(number);

		for (let i = 0, j = 1; i < calculations.length; i++, j++) {
			if (calculations[i] != '+' && calculations[i] != '-') {
				console.log(actionSign[i]);
				prev = calculations[i];
			}
			if (calculations[j] != '+' && calculations[j] != '-') {
				curr = calculations[j];
			}

			switch (calculations[i]) {
				case '+':
					result = prev + curr;
					break;
				case '-':
					result = prev - curr;
					break;
				default:
			}
		}

		console.log(result);
		(number = 0), (numberString = 0), (result = 0), (calculations = []);
	}
};

handleTheme();
themeListeners.forEach(listener => {
	themeRange.addEventListener(listener, handleTheme);
});

keys.forEach(key => key.addEventListener('click', handleResult));
