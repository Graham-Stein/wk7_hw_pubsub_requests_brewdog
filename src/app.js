const Punk = require('./models/punk.js');
const PunkListView = require('./views/punk_list_view.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#beer-list');
  const elementInfo = new PunkListView(selectElement);
  elementInfo.bindEvents();

  const testPunk = new Punk();
  testPunk.getData();
});
