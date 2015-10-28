const Metalsmith = require('metalsmith');
const metalsmith = new Metalsmith(__dirname);
const ncp = require('ncp');

const buildComplete = (error) => {
  if (error) return console.error(error);
  ncp(`${__dirname}/../assets`, `${__dirname}/build`, (assetError) => {
    if (assetError) return console.error(assetError);
    console.timeEnd('Built');
  });
};
const markdown = require('metalsmith-markdown');

// -----
const layouts = require('metalsmith-layouts');

console.time('Built');
metalsmith
  .use(markdown())
  .use(layouts({
    engine: 'jade',
    basedir: `${__dirname}/layouts`,
  }))
  .use((files, metalsmith, done) => {
    ncp(`${__dirname}/../assets`, './build', done);
  })
  .build(buildComplete);
