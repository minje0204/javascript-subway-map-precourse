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
  //Todo: vaidate
  return stationName;
};

const Station = () => {
  printLayout();
  addEvent();
};
export default Station;
