export const leapYear = (year) => {
  if (year % 4 === 0) {
    return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    return [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }
};

export const month_names_short = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Weeks = ["Sun", "Mon", "Tue", " Wed", " Thu", " Fri", " Sat"];
