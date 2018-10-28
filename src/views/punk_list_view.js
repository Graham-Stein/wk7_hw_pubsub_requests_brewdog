const PubSub = require('../helpers/pub_sub.js');
const PunkView = require('./punk_view.js');

const PunkListView = function(container) {
  this.container = container;
  this.beers = [];
};

PunkListView.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beers-ready', (event) => {
    this.beers = event.detail;
    this.render();
  });
  PubSub.subscribe('SelectBeerView:beer-selected', (event) => {
    this.clearView();
    const chosenBeer = this.beers[event.detail];
    const punkViewSingle = new PunkView(this.container, chosenBeer);
    punkViewSingle.render();
  });
};

PunkListView.prototype.render = function() {
  this.beers.forEach((beer) => {
    const punkView = new PunkView(this.container, beer);
    punkView.render();
  });
};

PunkListView.prototype.clearView = function() {
  this.container.innerHTML = '';
};

module.exports = PunkListView;
