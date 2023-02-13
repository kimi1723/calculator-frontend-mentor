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

keys.forEach(key => {
	key.addEventListener('click', e => {
		e.preventDefault();

		if (result.textContent === '0') {
			result.textContent = '';
		}

		if (e.target.textContent !== '=') {
			let valueString = e.target.textContent;
			result.textContent += valueString;
		}

		if (e.target.textContent == '=') {
			result.textContent = eval(result.textContent);
		}
	});
});

result.textContent = 0;
handleTheme();
themeListeners.forEach(listener => {
	themeRange.addEventListener(listener, handleTheme);
});

// keys.forEach(key => key.addEventListener('click', handleResult));
