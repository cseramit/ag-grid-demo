export class KeyboardEventsUtil {
	public static getCharCodeFromEvent(event: any): any {
		event = event || window.event
		return typeof event.which === 'undefined' ? event.keyCode : event.which
	}

	public static isKeyPressedNumeric(event: KeyboardEvent): boolean {
		const charCode = this.getCharCodeFromEvent(event)
		const charStr = event.key ? event.key : String.fromCharCode(charCode)
		return KeyboardEventsUtil.isCharNumeric(charStr)
	}

	public static isCharNumeric(charStr: string): boolean {
		return !!/\d/.test(charStr)
	}

	public static isSemicolonPressed(event: KeyboardEvent) {
		return event.keyCode === 186
	}

	public static isKeyPressedDecimal(event: any) {
		return event.keyCode === 190 || event.keyCode === 110
	}

	public static isKeyPressedNegative(event: any) {
		return event.keyCode === 189 || event.keyCode === 109
	}

	public static isKeyPressedNavigation(event: any) {
		return (
			event.keyCode === 39 ||
			event.keyCode === 37 ||
			event.keyCode === 38 ||
			event.keyCode === 40 ||
			event.keyCode === 36 ||
			event.keyCode === 35 ||
			event.keyCode === 8 ||
			event.keyCode === 46 ||
			event.keyCode === 16
		)
	}

	public static isReturnKeyPressed(event: any) {
		return event.keyCode === 13
	}

	public static isTabKeyPress(event: KeyboardEvent): boolean {
		return event.keyCode === 9
	}
}
