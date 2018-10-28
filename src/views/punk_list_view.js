const PubSub = require('../helpers/pub_sub.js');
const PunkView = require('./punk_view.js');

const PunkListView = function(container) {
  this.container = container;
  this.beers = [];
};

PunkListView.prototype.bindEvents = function() {
  PubSub.subscribe('Punk:beers-ready', (event) => {
    this.clearView();
    this.beers = event.detail;
    this.render(this.beers);
  });
  PubSub.subscribe('SelectBeerView:beer-selected', (event) => {
    this.clearView();
    const chosenBeer = this.beers[event.detail];
    const punkViewSingle = new PunkView(this.container, chosenBeer);
    punkViewSingle.render();
  });
  PubSub.subscribe('SelectABVView:strength-selected', (event) => {
    this.clearView();
    strongEnoughBeer = event.detail;
    this.render(strongEnoughBeer);
  });
  const home = document.querySelector('#home');
  home.addEventListener('click', (event) => {
    this.clearView();
    this.render(this.beers);
  });
};

PunkListView.prototype.render = function(beerArr) {
  beerArr.forEach((beer) => {
    const punkView = new PunkView(this.container, beer);
    punkView.render();
  });
};

PunkListView.prototype.clearView = function() {
  this.container.innerHTML = '';
};

module.exports = PunkListView;
