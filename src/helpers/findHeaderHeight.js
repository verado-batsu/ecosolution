export function findHeaderHeight() {
	const header = document.querySelector('header')
	if (header) {
		return header.offsetHeight;
	}
	
	return 0;
}