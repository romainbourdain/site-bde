const getDays = (time) => {
  return Math.ceil(time / (1000 * 60 * 60 * 24) - 1);
};

const getHours = (time) => {
  return Math.ceil(time / (1000 * 60 * 60) - 1) % 24;
};

const getMinutes = (time) => {
  return Math.ceil(time / (1000 * 60) - 1) % 60;
};

const getSeconds = (time) => {
  return (Math.ceil(time / 1000) - 1) % 60;
};

export const getTime = (time) => {
  const days = getDays(time);
  const hours = getHours(time);
  const minutes = getMinutes(time);
  const seconds = getSeconds(time);
  const diffence = {
    days: days.toString().length === 1 ? `0${days}` : days,
    hours: hours.toString().length === 1 ? `0${hours}` : hours,
    minutes: minutes.toString().length === 1 ? `0${minutes}` : minutes,
    seconds: seconds.toString().length === 1 ? `0${seconds}` : seconds,
  };
  return diffence;
};
