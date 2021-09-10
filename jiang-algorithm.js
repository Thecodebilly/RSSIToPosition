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

function getWeightedPosition(beacons){
// import data
  var num = beacons.length;
  var x, y, h, r;
  if(num > 0) {
    x = beacons[0][0];
    y = beacons[0][1];
    h = beacons[0][2];
    // r uses default values of -65 for RSSI@1meter
    r =
  }
}
