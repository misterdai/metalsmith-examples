const Metalsmith = require('metalsmith');
const metalsmith = new Metalsmith(__dirname);
const buildComplete = (error) => {
  if (error) return console.error(error);
  console.timeEnd('Built');
};

// -----
const markdown = require('metalsmith-markdown');

console.time('Built');
metalsmith
  .use(markdown())
  .build(buildComplete);
