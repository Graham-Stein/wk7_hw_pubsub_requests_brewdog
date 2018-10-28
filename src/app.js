const Punk = require('./models/punk.js');
const PunkListView = require('./views/punk_list_view.js');
const SelectByABV = require('./views/select_abv_view.js');
const SelectBeerView = require('./views/select_beer_view.js');
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('#beer-list');
  const elementInfo = new PunkListView(selectElement);
  elementInfo.bindEvents();

  const beerDropdown = document.querySelector('#select-beer');
  const dropdownBeerInfo = new SelectBeerView(beerDropdown);
  dropdownBeerInfo.bindEvents();

  const abvDropdownSelect = document.querySelector('#select-abv');
  const dropdownABVSelection = new SelectByABV(abvDropdownSelect);
  console.log(dropdownABVSelection);
  dropdownABVSelection.bindEvents();

  const testPunk = new Punk();
  testPunk.getData();
});
