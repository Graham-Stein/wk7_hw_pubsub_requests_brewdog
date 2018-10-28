const PubSub = require('../helpers/pub_sub.js');

const SelectByABV = function(container) {
  this.container = container;
  this.beers = [];
};

SelectByABV.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beers-ready', (event) => {
    this.beers = event.detail;
    this.populate();
  });
  this.container.addEventListener('change', (evt) => {
    abvCorrect = this.abvFilter(evt.target.value);
    PubSub.publish('SelectABVView:strength-selected', abvCorrect);
  });
};

SelectByABV.prototype.abvFilter = function(abv) {
  filteredBeers = this.beers.filter((beer) => {
    return beer.abv >= abv;
  });
  return filteredBeers;
};
SelectByABV.prototype.populate = function() {
  const abvList = [2, 5, 10, 15];
  abvList.forEach((strength) => {
    const option = document.createElement('option');
    option.textContent = strength;
    option.value = strength;
    this.container.appendChild(option);
  });
};
module.exports = SelectByABV;
