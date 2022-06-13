const t = require("tiles-in-bbox");

// Follows the GeoJson/OpenStreetMaps convention of a clockwise box starting at the bottom.
// has to be in this shape:
const bbox = {
  "bottom": 42.356,
  "left": -71.1279,
  "top": 42.3876,
  "right": -71.1002
};

const t = require("tiles-in-bbox");

// [minLong, minLat, maxLong, maxLat]
// [bottom, left, top, right]
const turfBbox = [-0.112881, 51.515333, -0.112444, 51.515847];
const convertedBbox = {
  "bottom": turfBbox[0],
  "left": turfBbox[1],
  "top": turfBbox[2],
  "right": turfBbox[3]
};

const zoom = 17;
const tiles = t.tilesInBbox(convertedBbox, zoom);
console.log(tiles, "------ tiles, zoom lvl 16 -------------");

