import printLayout from './Template.js';
import { handleUnvalidInput } from '../../utils/inputFunc.js';
import {
  getItem,
  setItem,
  STATION_STORAGE_KEY,
} from '../../utils/localStorageFunc.js';
import Station from './Model.js';

const addEvent = () => {
  const stationAddBtn = document.getElementById('station-add-button');

  stationAddBtn.addEventListener('click', handleClick);
};

const handleClick = () => {
  const stationName = getStationName();
  const prev = getItem(STATION_STORAGE_KEY) || [];
  if (!isDuplicated(stationName, prev))
    return setItem(STATION_STORAGE_KEY, [...prev, new Station(stationName)]);

  const stationNameInput = document.getElementById('station-name-input');
  const ERR_MESSAGE = '중복된 역이름 입니다';
  handleUnvalidInput(stationNameInput, ERR_MESSAGE);
};

const isDuplicated = (stationName, stationList) => {
  return !!stationList.find((v) => v.name === stationName);
};

const getStationName = () => {
  const stationNameInput = document.getElementById('station-name-input');
  const stationName = stationNameInput.value;

  stationNameInput.value = '';

  if (validate(stationName)) return stationName;
  const ERR_MESSAGE = '역이름은 2글자 이상이여야 합니다.';
  handleUnvalidInput(stationNameInput, ERR_MESSAGE);
};

const validate = (input) => {
  //Todo 중복 이름 체크
  return input.length < 2 ? false : true;
};

const StationContainer = () => {
  printLayout();
  addEvent();
};
export default StationContainer;
