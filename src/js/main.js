const themeRange = document.querySelector('.theme-box__range');
const theme = document.querySelector('body');
const themeListeners = ['click', 'keydown', 'touchend'];
const keys = document.querySelectorAll('.calc-keys__key');
const result = document.querySelector('.calc-result__text');
let value = '';
let resultV = '';

const handleTheme = () => {
	setTimeout(() => {
		theme.dataset.theme = `theme-${themeRange.value}`;
	}, 1);
};

const handleCalc = e => {
	e.preventDefault();

	if (e.target.textContent !== '=' && e.target.textContent !== 'del' && e.target.textContent !== 'reset') {
		let valueString = e.target.textContent;

		if (
			result.textContent === '0' &&
			e.target.textContent !== '+' &&
			e.target.textContent !== '-' &&
			e.target.textContent !== '/' &&
			e.target.textContent !== '*' &&
			e.target.textContent !== '.'
		) {
			result.textContent = valueString;
		} else if (
			e.target.textContent !== '+' &&
			e.target.textContent !== '-' &&
			e.target.textContent !== '/' &&
			e.target.textContent !== '*' &&
			e.target.textContent !== '.'
		) {
			result.textContent += valueString;
		} else if (e.target.textContent === '.' && result.textContent.at(-1) !== '.') {
			result.textContent += valueString;
		} else {
			if (
				e.target.textContent !== '.' &&
				result.textContent.at(-1) !== '+' &&
				result.textContent.at(-1) !== '-' &&
				result.textContent.at(-1) !== '*' &&
				result.textContent.at(-1) !== '/'
			) {
				result.textContent += valueString;
			} else if (e.target.textContent !== '.') {
				result.textContent = result.textContent.slice(0, -1);
				result.textContent += valueString;
			}
		}
	}

	if (e.target.textContent === '=') {
		result.textContent = eval(result.textContent);
	}

	if (e.target.textContent === 'del' && result.textContent.length > 1) {
		result.textContent = result.textContent.slice(0, -1);
	} else if (e.target.textContent === 'del' && result.textContent.length === 1) {
		result.textContent = '0';
	}

	if (e.target.textContent === 'reset') {
		result.textContent = 0;
	}
};

result.textContent = 0;
handleTheme();

themeListeners.forEach(listener => {
	themeRange.addEventListener(listener, handleTheme);
});
keys.forEach(key => key.addEventListener('click', handleCalc));
