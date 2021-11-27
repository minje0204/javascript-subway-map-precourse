export const STATION_STORAGE_KEY = 'stations_list';

const setItem = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getItem = (key) => {
  const value = window.localStorage.getItem(key);
  return JSON.parse(value);
};

export { setItem, getItem };
