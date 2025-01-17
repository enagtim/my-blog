export function GetPluralForm(number: number, singular: string, few: string, many: string): string {
	const getNumber = number % 100;
	const lastDigit = getNumber % 10;
	if (getNumber > 10 && getNumber < 20) {
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
