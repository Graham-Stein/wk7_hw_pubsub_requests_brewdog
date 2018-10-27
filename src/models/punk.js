const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Punk = function() {
  this.data = [];
  this.beerList = [];
};

Punk.prototype.getData = function() {
  const url = 'https://api.punkapi.com/v2/beers';
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
      .then((data) => {
        this.handleDataReady(data);
        this.handleDataBeerNameOnly(data);
        PubSub.publish('Punk:beers-ready', this.data);
        PubSub.publish('Punk:beer-list-ready', this.beerList);
      })
      .catch((error) => {
        console.log('No Data - Punk.JS');
      });
};

Punk.prototype.handleDataReady = function(beers) {
  this.data = beers.map((beer) => {
    return {
      name: beer.name,
      tagline: beer.tagline,
      description: beer.description,
      abv: beer.abv,
      image_url: beer.image_url,
    };
  });
};

Punk.prototype.handleDataBeerNameOnly = function(beers) {
  this.beerList = beers.map((beer) => {
    return {name: beer.name};
  });
};
module.exports = Punk;
