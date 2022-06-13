const SphericalMercator = require("@mapbox/sphericalmercator");

const merc = new SphericalMercator({
  "size": 256,
  // If antimeridian: true is passed on initialization of the SphericalMercator       object, this method will support converting longitude values up to 360°.
  "antimeridian": true
});

const res1 = merc.px([-0.112881, 51.515807], 1);
// const res2 = merc.px([-0.112881, 51.515807], 16);

console.log(res1, "----- px res1 -------");
// console.log(res2, "----- px res2 -------");

const bbox1 = merc.bbox(res1[0], res1[1], 1);
console.log(bbox1, "----- bbox res1 -------");

const xyzRes1 = merc.xyz(bbox1, 1);
console.log(xyzRes1, "----- xyzRes1 -------");

// const bbox2 = {minlat: 51.515333, minlon: -0.112881, maxlat: 51.515847, maxlon: -0.112444};
// const xyzRes1 = merc.xyz(bbox2, 1);
// console.log(xyzRes1, "----- xyzRes1 -------");
