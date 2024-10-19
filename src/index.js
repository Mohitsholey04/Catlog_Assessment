const fs = require("fs");
const path = require("path");
const { decodeValue, lagrangeInterpolation } = require("./utils");

function readTestCase(filename) {
  return JSON.parse(fs.readFileSync(path.join(__dirname, "../data", filename), "utf-8"));
}

function processTestCase({ keys, ...roots }) {
  const points = Object.keys(roots).map((key) => {
    const x = parseInt(key, 10);
    const { base, value } = roots[key];
    return [x, decodeValue(base, value)];
  });
  return lagrangeInterpolation(points);
}

function main() {
  ["testcase1.json", "testcase2.json"].forEach((file, index) => {
    const secret = processTestCase(readTestCase(file));
    console.log(`Secret for Testcase ${index + 1}:`, secret);
  });
}

main();
