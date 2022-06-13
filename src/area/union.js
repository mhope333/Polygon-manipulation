const turf = require("@turf/turf");
const titleBoundary = require("./overlapping-polygons/SGL654020.json");

let result;

function combineOverlappingPolygons() {

  for (let i = 1; i < titleBoundary.geojson.features.length; i++) {
    console.log(`--------------- new loop ${i} -------------------------`);

    const unionResult = (i === 1)
      ? turf.union(titleBoundary.geojson.features[i - 1], titleBoundary.geojson.features[i])
      : turf.union(result, titleBoundary.geojson.features[i]);

    console.log(JSON.stringify(unionResult), `-------------------- result ${i} -------------------`);

    result = unionResult; //
  }

  console.log(JSON.stringify(result), "----------- final result -------------------");

  const area = turf.area(result);
  console.log(area, "----------- final result - area in SqM -------------------");
}

combineOverlappingPolygons();
