const Station = () => {
  const container = document.getElementById('contents-container');
  return {
    render() {
      container.innerHTML = '';
      const station = document.createElement('div');
      station.innerHTML = '<p>todo: Station</p>';

      container.appendChild(station);
    },
  };
};
export default Station;
