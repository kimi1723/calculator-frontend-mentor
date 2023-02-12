const themeRange = document.querySelector('.theme-box__range');
const theme = document.querySelector('body');

const handleTheme = e => {
	setTimeout(() => {
		theme.dataset.theme = `theme-${themeRange.value}`;
	}, 1);
};

handleTheme();
themeRange.addEventListener('click', handleTheme);
themeRange.addEventListener('keydown', handleTheme);
