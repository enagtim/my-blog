export function GetPluralForm(number: number, singular: string, few: string, many: string): string {
	const Number = number % 100;
	const lastDigit = Number % 10;
	if (Number > 10 && Number < 20) {
		return many;
	}
	if (lastDigit > 1 && lastDigit < 5) {
		return few;
	}
	if (lastDigit === 1) {
		return singular;
	}
	return many;
}
