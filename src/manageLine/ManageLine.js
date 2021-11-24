const ManageLine = () => {
  const container = document.getElementById('contents-container');
  const render = () => {
    container.innerHTML = '';
    const station = document.createElement('div');
    station.innerHTML = '<p>todo: ManageLine</p>';

    container.appendChild(station);
  };
  render();
};
export default ManageLine;
