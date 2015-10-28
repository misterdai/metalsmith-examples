const Metalsmith = require('metalsmith');
const metalsmith = new Metalsmith(__dirname);
const ncp = require('ncp');

const buildComplete = (error) => {
  if (error) return console.error(error, error.stack);
  ncp(`${__dirname}/../assets`, `${__dirname}/build`, (assetError) => {
    if (assetError) return console.error(assetError);
    console.timeEnd('Built');
  });
};
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const collections = require('metalsmith-collections');
const permalinks = require('metalsmith-permalinks');
const moment = require('moment');

// -----
const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017/metalsmith';

console.time('Built');
metalsmith
  .use((files, metalsmith, done) => {
    MongoClient.connect(mongoUrl, (error, db) => {
      if (error) return done(error);
      db.collection('pages').find({}).toArray((docError, pages) => {
        if (docError) return done(docError);
        pages.forEach((page) => {
          page.contents = new Buffer(page.contents);
          files[page.file] = page;
        });
        done();
      });
    })
  })
  .metadata({moment})
  .use(collections({
    blog: {
      pattern: 'blog/**/*.md',
      sort: 'date',
      reverse: true,
    },
    pages: {
      pattern: 'pages/**/*.md',
      sort: 'title',
    },
  }))
  .use(markdown())
  .use(permalinks({
    relative: false,
  }))
  .use(layouts({
    engine: 'jade',
    basedir: `${__dirname}/layouts`,
  }))
  .use((files, metalsmith, done) => {
    ncp(`${__dirname}/../assets`, './build', done);
  })
  .build(buildComplete);
