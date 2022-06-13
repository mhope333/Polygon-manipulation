const turfArea = require("@turf/area").default;

const titleBoundaryOriginal = require("./overlapping-polygons/SGL654020.json");
const titleBoundaryUnion = require("./overlapping-polygons/SGL654020_union.json");
// const titleBoundaryUnionClean = require("./overlapping-polygons/LN213725_unionClean.json");


console.log(turfArea(titleBoundaryOriginal.geojson), "-------------------- standard siteArea ----------------");
console.log(turfArea(titleBoundaryUnion), "-------------------- union site area ----------------");
// console.log(turfArea(titleBoundaryUnionClean), "-------------------- union clean ----------------");
