const t = require("tiles-in-bbox");
// const turfBbox = require("@turf/bbox");
const turf = require("@turf/turf");
const SphericalMercator = require("@mapbox/sphericalmercator");

const merc = new SphericalMercator({
  "size": 256,
  // If antimeridian: true is passed on initialization of the SphericalMercator       object, this method will support converting longitude values up to 360°.
  "antimeridian": true
});

const geoJson = {
  "type": "Feature",
  "properties": {
    "createdDate": "2014-11-17T00:00:00.000Z",
    "updatedDate": "2015-11-17T00:00:00.000Z",
    "polyId": "39446"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [-0.112881, 51.515807],
        [-0.112535, 51.515333],
        [-0.112444, 51.515366],
        [-0.112796, 51.515847],
        [-0.112881, 51.515807]
      ]
    ]
  }
};

const turfBboxResult = turf.bbox(geoJson); // .toGeoJSON()
console.log(turfBboxResult, "----------- bbox ----------------");
// console.log(turf.bboxPolygon(turfBboxResult).geometry.coordinates, "----------- bbox toGeoJSON  ----------------");

// const testBbox = [-0.112881, 51.515333, -0.112444, 51.515847];
// BBox - bbox extent in [minX, minY, maxX, maxY] order
// [minLat, minLong, maxLat, maxLong]
// [left, bottom, right, top]
const convertedBbox = {
  "left": turfBboxResult[0],
  "bottom": turfBboxResult[1],
  "right": turfBboxResult[2],
  "top": turfBboxResult[3]
};

const zoom = 17;
const tiles = t.tilesInBbox(convertedBbox, zoom);
console.log(tiles, "------ 'tiles-in-bbox' : tiles - zoom lvl 17 -------------");

const xyzRes = merc.xyz(turfBboxResult, 17);
console.log(xyzRes, "----- 'mercator': xyzRes -------");
