const Station = () => {
  const container = document.getElementById('contents-container');
  const render = () => {
    container.innerHTML = '';
    const station = document.createElement('div');
    station.innerHTML = '<p>todo: station component</p>';

    container.appendChild(station);
  };
  render();
};
export default Station;
