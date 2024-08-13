export const isSameDay = (date1: Date, date2: Date) =>
  date1?.toLocaleDateString() === date2?.toLocaleDateString();
