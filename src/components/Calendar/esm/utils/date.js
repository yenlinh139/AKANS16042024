/**
 * Create a new Intl.DateTimeFormat object with the specified locale and options.
 *
 * @param {string} locale - An optional string specifying the locale to use.
 * @return {Intl.DateTimeFormat} A new Intl.DateTimeFormat object with options for formatting the weekday.
 */
export var weekDayFormatter = function weekDayFormatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
  })
}

/**
 * Get the number of days in the month
 */
export var getMonthlyDay = function getMonthlyDay(year, month) {
  var day = 31
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    day = 31
  } else if (month === 4 || month === 6 || month === 11 || month === 9) {
    day = 30
  } else if (month === 2) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      day = 29
    } else {
      day = 28
    }
  }
  return day
}
export var getWeeksInMonth = function getWeeksInMonth(
  year,
  monthNumber,
  startDayOfWeek,
) {
  if (startDayOfWeek === void 0) {
    startDayOfWeek = 0
  }
  var firstDayOfWeek = startDayOfWeek || 0
  var firstOfMonth = new Date(year, monthNumber - 1, 1)
  var lastOfMonth = new Date(year, monthNumber, 0)
  var numberOfDaysInMonth = lastOfMonth.getDate()
  var firstWeekDay = (firstOfMonth.getDay() - firstDayOfWeek + 7) % 7
  var used = firstWeekDay + numberOfDaysInMonth
  return Math.ceil(used / 7)
}
export var getWeeksInMonthonMonday = function getWeeksInMonthonMonday(
  year,
  monthNumber,
) {
  var firstOfMonth = new Date(year, monthNumber - 1, 1)
  var lastOfMonth = new Date(year, monthNumber, 0)
  var used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate()
  return Math.ceil(used / 7)
}
export var dayFormatter = function dayFormatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
  })
}
export var monthFormatter = function monthFormatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    month: 'long',
  })
}
export var shortMonthFormatter = function shortMonthFormatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    month: 'short',
  })
}
export var yearFormatter = function yearFormatter(locale) {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
  })
}
export var getDayOfWeekArray = function getDayOfWeekArray(startOfWeek) {
  var dayOfWeekArray = []
  for (var i = 0; i < 7; i++) {
    dayOfWeekArray.push((startOfWeek + i) % 7)
  }
  return dayOfWeekArray
}
