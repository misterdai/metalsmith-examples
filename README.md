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
npm install
node run 01
```

Replace the `01` with the directory name of the example you wish to execute.  This will fire up the Metalsmith build process and then run a static web server on port 8080.

`http://localhost:8080`

### 01

As simple as Metalsmith can get.  Will basically move files from the `src` directory to the `build` directory and remove any 'front-matter' that they may contain.

### 02

* Introduces: metalsmith-markdown

This is the first usage of a Metalsmith plugin.  In this case, it's `metalsmith-markdown` to render any markdown based files that are now contained with the `src` directory.

### 03

* Introduces: metalsmith-layouts, jade

Now we have markdown pages being rendered to the build directory, it'd be a lot more useful if these have a site layout wrapped around them and more access to the metadata (`front-matter`).  The metalsmith-layouts plugin will use a variety of view template engines, in this case Jade, and process them all for you.  It's useful to have this happen after the markdown has been rendered.

### 04

* Introduces: metalsmith-collections metalsmith-permalinks moment

Collections are introduced at this stage.  This allows building up of an array that will contain all files in a directory (or sub directories) according to a glob style search pattern.  These arrays can also be sorted by metadata that are set on the files matches and also reversed if required (e.g. sort of date, newest first).  This can then be taken advantage of within the layouts from the `03` example, providing a blog index page which can list all the blog posts and provide navigation links.

Permalinks are used to create nicer URL's in the final build.  It supports flexible patterns that can use metadata to construct the URL for each file.  It also ensures that directories are created for each file, containing an `index.html` file.  This allows you to host your static site and navigate around it wihtout having to have lots of `.html` based URLs.

Moment is a simple example of how the `metalsmith.metadata({})` method can be used to set global data for all view templates to take advantage of.  In this usage, it's to format the date associated with each blog post file.

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
