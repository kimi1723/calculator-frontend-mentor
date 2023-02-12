const themeRange = document.querySelector('.theme-box__range');
const theme = document.querySelector('body');
const themeListeners = ['click', 'keydown', 'touchend'];

const handleTheme = e => {
	setTimeout(() => {
		theme.dataset.theme = `theme-${themeRange.value}`;
	}, 1);
};

handleTheme();
themeListeners.forEach(listener => {
	themeRange.addEventListener(listener, handleTheme);
});
