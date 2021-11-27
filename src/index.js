import Section from './components/section/Section.js';
import LineContainer from './components/line/LineContainer.js';
import PrintLines from './components/printLines/PrintLines.js';
import StationContainer from './components/station/StationContainer.js';

const SubwayMap = () => {
  const stationButton = document.getElementById('station-manager-button');
  const lineButton = document.getElementById('line-manager-button');
  const sectionButton = document.getElementById('section-manager-button');
  const printButton = document.getElementById('map-print-manager-button');

  const addEvents = () => {
    stationButton.addEventListener('click', StationContainer);
    lineButton.addEventListener('click', LineContainer().render);
    sectionButton.addEventListener('click', Section().render);
    printButton.addEventListener('click', PrintLines().render);
  };
  addEvents();
  StationContainer();
};

SubwayMap();
