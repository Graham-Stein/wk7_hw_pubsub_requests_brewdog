const Punk = require('./models/punk.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const testPunk = new Punk();
  testPunk.getData();
});
