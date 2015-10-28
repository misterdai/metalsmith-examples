const Metalsmith = require('metalsmith');
const metalsmith = new Metalsmith(__dirname);

const buildComplete = (error) => {
  if (error) return console.error(error);
  console.timeEnd('Built');
};

console.time('Built');
metalsmith.build(buildComplete);
