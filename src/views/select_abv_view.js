const PubSub = require('../helpers/pub_sub.js');

const SelectByABV = function(container) {
  this.container = container;
  this.beers = [];
};

SelectByABV.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beer-list-ready', (event) => {
    this.beers = event.detail;
    console.log('in select by abv', this.beers);
    this.populate();
  });
  this.container.addEventListener('change', (event) => {
    console.log(event);
    // logic to create list of beers with the abv desired
    // PubSub.publish('SelectABVView:strength-selected', xxxxx);
  });
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
