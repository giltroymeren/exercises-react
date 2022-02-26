export const appendZeroToTime = (num: number) =>
  (num < 10 ? `0${num}` : `${num}`);
