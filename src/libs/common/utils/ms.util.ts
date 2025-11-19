interface TimeUnits {
	[key: string]: number
}

export function ms(timeString: string | number): number {
	if (typeof timeString === 'number') {
		return timeString
	}

	const timeUnits: TimeUnits = {
		// Наносекунды
		nanosecond: 0.000001,
		nanoseconds: 0.000001,
		ns: 0.000001,

		// Микросекунды
		microsecond: 0.001,
		microseconds: 0.001,
		μs: 0.001,
		us: 0.001,

		// Миллисекунды
		millisecond: 1,
		milliseconds: 1,
		ms: 1,

		// Секунды
		second: 1000,
		seconds: 1000,
		sec: 1000,
		s: 1000,

		// Минуты
		minute: 60000,
		minutes: 60000,
		min: 60000,
		m: 60000,

		// Часы
		hour: 3600000,
		hours: 3600000,
		hr: 3600000,
		h: 3600000,

		// Дни
		day: 86400000,
		days: 86400000,
		d: 86400000,

		// Недели
		week: 604800000,
		weeks: 604800000,
		w: 604800000,

		// Месяцы (приблизительно)
		month: 2592000000,
		months: 2592000000,

		// Годы (приблизительно)
		year: 31536000000,
		years: 31536000000,
		y: 31536000000
	}

	const normalizedString = timeString.toLowerCase().trim()
	const pattern = /^(\d+(?:\.\d+)?)\s+([a-zA-Z]+)$/
	const match = normalizedString.match(pattern)

	if (!match) {
		throw new Error(
			`Неверный формат времени: "${timeString}". Используйте формат "500 ms", "1 minute", "2 hours" и т.д.`
		)
	}

	const value = parseFloat(match[1])
	const unit = match[2]

	if (!timeUnits.hasOwnProperty(unit)) {
		throw new Error(
			`Неизвестная единица времени: "${unit}" в строке "${timeString}"`
		)
	}

	return value * timeUnits[unit]
}
