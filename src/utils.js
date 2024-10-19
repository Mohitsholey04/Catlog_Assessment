function decodeValue(base, value) {
  return parseInt(value, base);
}

function lagrangeInterpolation(points) {
  return Math.round(
    points.reduce((c, [xi, yi], i) =>
      c + yi * points.reduce((term, [xj], j) => 
        i !== j ? term * (xj / (xj - xi)) : term, 1), 0)
  );
}

module.exports = {
  decodeValue,
  lagrangeInterpolation,
};
