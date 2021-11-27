import { getItem, STATION_STORAGE_KEY } from '../../utils/localStorageFunc.js';

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
  <table id="station-names" border="1">
  </table>
</div>
`;

const HEADER_TEXT = ['역 이름', '설정'];

const printHeader = () => {
  const table = document.getElementById('station-names');
  HEADER_TEXT.forEach((text) => {
    const header = document.createElement('th');
    header.innerText = text;
    table.appendChild(header);
  });
};

const handleDelte = (idx) => {
  console.log(idx);
};
const printStaitons = () => {
  const table = document.getElementById('station-names');
  const stations = getItem(STATION_STORAGE_KEY);

  if (stations) {
    stations.forEach((item, idx) => {
      const trEl = document.createElement('tr');
      const tdEl = document.createElement('td');
      tdEl.innerText = item.name;
      trEl.appendChild(tdEl);

      const tdEl2 = document.createElement('td');
      const btnEl = document.createElement('button');
      btnEl.innerText = '삭제';
      btnEl.addEventListener('click', () => handleDelte(idx));
      tdEl2.appendChild(btnEl);

      trEl.appendChild(tdEl2);
      table.appendChild(trEl);
    });
  }
};

const printLayout = () => {
  const container = document.getElementById('contents-container');

  container.innerHTML = INPUT_TAG + STATION_LIST;

  if (getItem(STATION_STORAGE_KEY)) {
    printHeader();
    printStaitons();
  }
};

export default printLayout;
