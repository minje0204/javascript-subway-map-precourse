const Line = () => {
  const container = document.getElementById('contents-container');
  return {
    render() {
      container.innerHTML = '';
      const station = document.createElement('div');
      station.innerHTML = '<p>todo: Line</p>';

      container.appendChild(station);
    },
  };
};
export default Line;
