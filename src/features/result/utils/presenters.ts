export const renderDate = (date: string) => {
  const time = new Date(date);
  const month = `00${time.getMonth()}`.slice(-2);
  const day = `00${time.getDay()}`.slice(-2);

  return date ? `${time.getFullYear()}-${month}-${day}` : '-';
};
