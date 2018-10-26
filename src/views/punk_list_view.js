const PubSub = require('../helpers/pub_sub.js');
const PunkView = require('./punk_view.js');

const PunkListView = function(container) {
  this.container = container;
  this.beers = [];
};

PunkListView.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beers-ready', (event) => {
    this.beers = event.detail;
    console.log(this.beers);
    this.render();
  });
};

PunkListView.prototype.render = function() {
  this.beers.forEach((beer) => {
    const punkView = new PunkView(this.container, beer);
    punkView.render();
  });
};

module.exports = PunkListView;
