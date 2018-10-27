const PubSub = require('../helpers/pub_sub.js');

const SelectBeerView = function(container) {
  this.container = container;
};

SelectBeerView.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beer-list-ready', (event) => {
    console.log('beer list ready subscribe', event);
    const allBeers = event.detail;
    this.populate(allBeers);
  });
  this.container.addEventListener('change', (event) => {
    const selectedBeer = event.target.value;
    console.log('Selected beer is:', selectedBeer);
    PubSub.publish('SelectBeerView:beer-selected', selectedBeer);
  });
};
// populate method to list all beers from beers array
SelectBeerView.prototype.populate = function(allBeers) {
  allBeers.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = index;
    this.container.appendChild(option);
  });
};

// another method to add the event listener for a change and
// another to send the selection to punk list view to show one beer


module.exports = SelectBeerView;
