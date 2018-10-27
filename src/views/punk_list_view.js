const PubSub = require('../helpers/pub_sub.js');
const PunkView = require('./punk_view.js');

const PunkListView = function(container) {
  this.container = container;
  this.beers = [];
};

PunkListView.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beers-ready', (event) => {
    console.log('TEST', event);
    this.beers = event.detail;
    this.render();
  });
  // this.container.addEventListener('change', (evt) => {
  //   console.log('Event listener for beer beerDropdown:', evt);
  // });
};

PunkListView.prototype.render = function() {
  this.beers.forEach((beer) => {
    const punkView = new PunkView(this.container, beer);
    punkView.render();
  });
};

module.exports = PunkListView;
