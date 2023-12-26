function dayCalculator(
  targetDay: number,
  currentDay: string
): string | undefined {
  const Months = [
    "Farvardin",
    "Ordibehesht",
    "Khordad",
    "Tir",
    "Mordad",
    "Shahrivar",
    "Mehr",
    "Aban",
    "Azar",
    "Dey",
    "Bahman",
    "Esfand",
  ];
  const Days = [
    "shanbe",
    "1shanbe",
    "2shanbe",
    "3shanbe",
    "4shanbe",
    "5shanbe",
    "jome",
  ];
  const yearDays: number = 6 * 31 + 5 * 30 + 29;
  const currentDayNum = currentDay.split(" ")[0];
  const currentMonth = currentDay.split(" ")[1];
  const currentDayName = currentDay.split(" ")[2];
  const MonthIndex = Months.findIndex((month) => month == currentMonth) + 1;
  let curentDayNumInYear: number;
  console.log(MonthIndex);
  if (MonthIndex <= 6) {
    curentDayNumInYear = MonthIndex * 31 + parseInt(currentDayNum);
  } else if (MonthIndex > 6 && MonthIndex < 12) {
    const afterSummer = MonthIndex - 6 - 1;
    curentDayNumInYear = 6 * 31 + afterSummer * 30 + parseInt(currentDayNum);
    console.log(curentDayNumInYear);
  } else {
    curentDayNumInYear = 6 * 31 + 5 * 30 + parseInt(currentDayNum);
    console.log(curentDayNumInYear);
  }
  if (targetDay < curentDayNumInYear) {
    const t = Math.floor(curentDayNumInYear - targetDay);
    console.log(curentDayNumInYear);
    console.log(t);
    if (t % 7 == 0) {
      console.log(true);
      return currentDayName;
    } else {
      const difference = t % 7;
      return Days[difference - 1];
    }
  } else {
    const t = Math.floor(targetDay - curentDayNumInYear);
    console.log(t);
    if (t % 7 == 0) {
      return currentDayName;
    } else {
      const difference = t % 7;
      return Days[difference - 1];
    }
  }
}
console.log(dayCalculator(340, "11 Esfand jome"));
