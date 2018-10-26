// const assert = require('assert');
// const Punk = require('../models/punk.js');


//
// describe('Punk beer list', function() {
//
//   let punk1;
//
//   beforeEach(function() {
//     journey1 = new Journey('linlithgow', 'stirling', 'train', 30);
//     journey2 = new Journey('paris', 'frankfurt', 'train', 400);
//     journey3 = new Journey('sydney', 'new york', 'aeroplane', 10000);
//     journey4 = new Journey('london', 'rome', 'car', 1200);
//     journey5 = new Journey('lancaster', 'isle of man', 'ferry', 80);
//     journeys = [journey1, journey2, journey3, journey4, journey5];
//     traveller = new Traveller(journeys);
//   });
//
//   it('should have a collection of journeys', function() {
//     const actual = traveller.journeys;
//     assert.deepStrictEqual(actual, journeys);
//   });
//
//   it('should be able to get the journeys start locations', function() {
//     const actual = [
//       journey1.startLocation,
//       journey2.startLocation,
//       journey3.startLocation,
//       journey4.startLocation,
//       journey5.startLocation
//     ];
//     assert.deepStrictEqual(actual, traveller.getJourneyStartLocations());
//   });
//
//   it('should be able to get the journeys end locations', function() {
//     const actual = [
//       journey1.endLocation,
//       journey2.endLocation,
//       journey3.endLocation,
//       journey4.endLocation,
//       journey5.endLocation
//     ];
//     assert.deepStrictEqual(actual, traveller.getJourneyEndLocations());
//   });
//
//   it('should be able to get journeys by transport', function() {
//     const actual = [
//       journey1,
//       journey2
//     ];
//    assert.deepStrictEqual(actual, traveller.getJourneysByTransport('train'));
//   });
//
//   it('should be able to get journeys over a certain distance', function() {
//     const actual = [
//       journey3,
//       journey4
//     ];
//     assert.deepStrictEqual(actual, traveller.getJourneysByMinDistance(1000))
//   });
//
//   // end of MVP ###########################################
//
//   it('should be able to calculate total distance travelled', function() {
//     const actual = 11710;
//  assert.deepStrictEqual(actual, traveller.calculateTotalDistanceTravelled());
//   });
//
// it('should be able to get a unique list of the modes of transport',
// function() {
//     const actual = [ 'train', 'aeroplane', 'car', 'ferry' ];
//     assert.deepStrictEqual(actual, traveller.getUniqueModesOfTransport());
//   });
//
// });
