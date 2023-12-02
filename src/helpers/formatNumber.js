export function formatNumber(number) {
	let formatedNumber = number.toLocaleString('en-ES').replace(/,/g, '.')

	return formatedNumber;
}