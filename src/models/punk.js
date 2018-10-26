const RequestHelper = require('../helpers/request_helper.js');

const Punk = function() {
  this.data = [];
};

Punk.prototype.getData = function() {
  const url = 'https://api.punkapi.com/v2/beers';
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log('????');
      });
};

module.exports = Punk;
