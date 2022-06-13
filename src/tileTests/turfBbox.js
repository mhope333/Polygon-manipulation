const turf = require("@turf/bbox");

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

const bbox = turf.default(geoJson); // .toGeoJSON()
console.log(bbox, "----------- bbox ----------------");
// BBox - bbox extent in minX, minY, maxX, maxY order