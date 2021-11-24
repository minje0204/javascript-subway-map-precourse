import Section from './components/section/Section.js';
import Line from './components/line/Line.js';
import PrintLines from './components/printLines/PrintLines.js';
import Station from './components/station/Station.js';

const SubwayMap = () => {
  const stationButton = document.getElementById('station-manager-button');
  const lineButton = document.getElementById('line-manager-button');
  const sectionButton = document.getElementById('section-manager-button');
  const printButton = document.getElementById('map-print-manager-button');

  const addEvents = () => {
    stationButton.addEventListener('click', Station());
    lineButton.addEventListener('click', Line().render);
    sectionButton.addEventListener('click', Section().render);
    printButton.addEventListener('click', PrintLines().render);
  };
  addEvents();
  Station();
};

SubwayMap();
