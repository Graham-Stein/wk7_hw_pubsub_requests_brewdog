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
    console.log('are they here too???', this.beers);
    console.log(this.beers[2]);
    console.log(event.detail);
  // CLEAR LIST BEFORE POPULATING!!!!!!!!!!!!!!!
    const punkViewSingle = new PunkView(this.container, this.beers[event.detail]);
    punkViewSingle.render();
  });

};

PunkListView.prototype.render = function() {
  this.beers.forEach((beer) => {
    const punkView = new PunkView(this.container, beer);
    punkView.render();
  });
};

module.exports = PunkListView;
