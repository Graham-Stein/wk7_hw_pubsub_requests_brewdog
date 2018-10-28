const PubSub = require('../helpers/pub_sub.js');

const SelectBeerView = function(container) {
  this.container = container;
};

SelectBeerView.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beer-list-ready', (event) => {
    const allBeers = event.detail;
    this.populate(allBeers);
  });
  this.container.addEventListener('change', (event) => {
    const selectedBeer = event.target.value;
    PubSub.publish('SelectBeerView:beer-selected', selectedBeer);
  });
};
SelectBeerView.prototype.populate = function(allBeers) {
  allBeers.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = index;
    this.container.appendChild(option);
  });
};
module.exports = SelectBeerView;
