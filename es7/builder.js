import Metalsmith from 'metalsmith';

import markdown from 'metalsmith-markdown';
import requestPromise from 'request-promise';
const metalsmith = new Metalsmith(__dirname);

metalsmith
  .use(markdown())
  .use(async (files, metalsmith) => {
    const json = await requestPromise(
      'http://jsonplaceholder.typicode.com/posts'
    );
    const posts = JSON.parse(json).slice(0, 5);
    posts.forEach((post) => {
      files[`posts/${post.id}.txt`] = {
        title: post.title,
        contents: new Buffer(post.body),
      };
    });
  })
  .build((err) => {
    if (err) return console.error(err, err.stack);
    console.log('Build complete');
  });
