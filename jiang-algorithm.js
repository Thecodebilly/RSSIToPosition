/*-----------------------------  jiang-algorithm.js  -------------------------------

This file consists of functions used to trilaterate an individual's position
based on RSSI readings from various beacons. This implementation utilizes weights
in order to prioritize the closest, most accurate readings.

An optimal value for K, number of beacons to be utilized has yet to be discovered.
(Perhaps all beacons with an RSSI better than around |70|? |80|? Depends on how many
usable beacons this gives us in various locations...)

An optimal algorithm for determining weights {w1, w2, ... , wk} for every k beacon
yet to be discovered. It will scale based on RSSI linearly, linearithmically,
etc. My idea is to instead add 100 to each RSSI value, add up the RSSI values and
assign a weight proportional to each based on its composition of the sum (linear)

----------------------------------------------------------------------*/

/*
Import previous ips implementation to borrow functions related to trilateration,
rssi value handling, etc.
*/
import * as ipsModule from 'ips.js';

// beacon[i][3] is the RSSI, sort array by this value
function findKBest(beacons, k=7)
{
//all obtained rssi values for a given 1000ms period as input_rssi
var a [beacons.size()];
var sortedArr [7];
var dis
//get all rssi values
index=0;
for (i in beacon)
{
a[index]=beacons[i][2]
index++;
}
//sorts the array of all the rssi values
a.sort(function(a, b) {
  return b - a;
})
// compares the top 7 in sorted rssi list, a, and the rssi values in the original beacon array.
// If a value matches, put the x, y, and rssi into a new array called sortedArr.
index=0;
for (var i=0; var<7; var++){
  for i in beacons
  {
  if a[1]==beacons[i][2]
    {
    sortedArr=beacons[i];
    index++;
    if index==7
    break;
    }
  }
  }
  return sortedArr;
}

function getWeights(NewBeacons){
  var cumulativeRSSI;
  NewBeacons.forEach(function(beacon){
    cumulativeRSSI += beacon[2];
  });
  // cumulativeRSSI = -423 or something, sum of all rssis
  NewBeacons.forEach(function(beacon){
    // CHANGE THIS
    NewBeacons.push(beacon/cumulativeRSSI);
  });
}

function getWeightedPosition(beacons){
  // import data
  var x, y, r, d, i;
  if(beacons.length < 3) {
    return ["ERROR", "Not enough beacons!"]
  }
  var NewBeacons = new Array(beacons.length);
  i = 0;
  while(i < num){
    x = beacons[i][0];
    y = beacons[i][1];
    // h = beacons[i][2];
    r = beacons[i][3];
    d = rssi_to_dist(beacons[i][3], beacons[i][4], beacons[i][5])
    NewBeacons[i] = [x, y, r, d];
    i++;
  }
  // sort and find top k (k = 7 default)
  NewBeacons = findKBest(NewBeacons);



}
