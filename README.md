# Metalsmith Examples

The code contained within this repository is from my talk on Static Site Generation using Metalsmith in Node.js.

## Slides from my talk, associated with this code

* [Slidr.io](https://slidr.io/misterdai/static-site-generation-using-metalsmith#1)
* [SpeakerDeck](https://speakerdeck.com/misterdai/static-site-generation-using-metalsmith)
* [SlideShare](http://www.slideshare.net/misterdai/static-site-generation-using-metalsmith-nodejs)

## Numbered sub-directories

Each numbered sub-directory (`01, 02, 03...`) represent a different example usage of Metalsmith.

### Running an example

Make sure you have Node.js installed (V4.2+ recommended).  Some examples may have specific requirements (e.g. 05 - Pages loaded from MongoDB).

```
node run 01
```

Replace the `01` with the directory name of the example you wish to execute.  This will fire up the Metalsmith build process and then run a static web server on port 8080.

`http://localhost:8080`

### 01

As simple as Metalsmith can get.  Will basically move files from the `src` directory to the `build` directory and remove any 'front-matter' that they may contain.

### 05

Based of the code from `04`, but with the additional code for loading pages from MongoDB.  These pages are expected to be held on a locally hosted MongoDB database, named `metalsmith` with a `pages` collection, holding data with this structure:

```
{
  title: String, // Name of the page
  file: String, // Fake file path, provide a .md for markdown content
  contents: String, // Contents of the page
}
```

#### Taking the example further

At this point you are using Metalsmith to pull some data from MongoDB instead of from the filesystem.  There are no restrictions preventing you from taking this much further and having a lot more metadata associated with each 'page' in the database, for use in your collections.

## Pull Requests & Issues

Happy to have further examples or issues highlighted with the code contained, just keep in mind that a lot of this is used for demonstrating Metalsmith.

## Links

* [Metalsmith](http://metalsmith.io)
