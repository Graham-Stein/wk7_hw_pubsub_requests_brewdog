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
};
// populate method to list all beers from beers array
SelectBeerView.prototype.populate = function(allBeers) {
  allBeers.forEach((beer) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    this.container.appendChild(option);
  });
};

// another method to add the event listener for a change and
// another to send the selection to punk list view to show one beer


module.exports = SelectBeerView;
