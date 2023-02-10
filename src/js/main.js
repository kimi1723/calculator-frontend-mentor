const themeRange = document.querySelector('.theme-box__range');
const theme = document.querySelector('body');

const handleTheme = () => {
	theme.dataset.theme = `theme-${themeRange.value}`;
};

handleTheme();
themeRange.addEventListener('click', handleTheme);
