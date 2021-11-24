const Section = () => {
  const container = document.getElementById('contents-container');
  return {
    render() {
      container.innerHTML = '';
      const station = document.createElement('div');
      station.innerHTML = '<p>todo: ManageLine</p>';

      container.appendChild(station);
    },
  };
};
export default Section;
