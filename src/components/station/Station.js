import printLayout from './Template.js';

const addEvent = () => {
  const stationAddBtn = document.getElementById('station-add-button');

  stationAddBtn.addEventListener('click', handleClick);
};

const handleClick = () => {
  const stationName = getStationName();
  console.log(stationName);
  //Todo createStation
};
const getStationName = () => {
  const stationNameInput = document.getElementById('station-name-input');
  const stationName = stationNameInput.value;

  stationNameInput.value = '';

  if (validate(stationName)) return stationName;
  // const ERR_MESSAGE = '역이름은 2글자 이상이여야 합니다.';
  // handleUnvalidInput(stationNameInput, ERR_MESSAGE);
  return '에러~~';
};

const validate = (input) => {
  //Todo 중복 이름 체크
  return input.length < 2 ? false : true;
};
const Station = () => {
  printLayout();
  addEvent();
};
export default Station;
