export const breakpoints = {
	sm: 768,
	md: 960,
	lg: 1280,
	xl: 1920,
}
const theme = {
	colors: {
		primary: 'red',
		secondary: 'blue',
		tertiary: 'green',
	},
	headerHeight: '70px',
	minq: Object.assign({}, ...Object.keys(breakpoints).map(bp => (
		{[bp]: `@media (min-width: ${breakpoints[bp]}px)`}))),
	maxq: Object.assign({}, ...Object.keys(breakpoints).map(bp => (
		{[bp]: `@media (max-width: ${breakpoints[bp]}px)`}))),
}

export default theme