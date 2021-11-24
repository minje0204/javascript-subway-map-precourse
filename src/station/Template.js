const INPUT_TAG = `
<div id="station-input-form">
  <label for="station-name">역 이름</label>
  <div>
    <input 
      type="text" 
      id="station-name-input" 
      name="station-name" 
      placeholder="역 이름을 입력해주세요.">
    </input> 
    <button id="station-add-button">역 추가</button>
  </div>
</div>
`;
const STATION_LIST = `
<div id="station-list">
  <h2>🚉 지하철 역 목록</h2>
  <table id="station-names">
  </table>
</div>
`;

const printLayout = () => {
  const container = document.getElementById('contents-container');

  container.innerHTML = INPUT_TAG + STATION_LIST;
};

export default printLayout;
