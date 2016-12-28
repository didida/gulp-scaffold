var src = './src';
var dest = './dist';
var staticPath = dest + '/static';

module.exports = {
  css: {
    all: src + '/css/**/*.css',
    src: src + '/css/*.css',
    dest: staticPath + '/css',
    compile: staticPath + '/css/*.css',
    settings: {}
  },
  html: {
    all: src + '/**/*.html',
    dest: dest
  },
  images: {
    src: src + '/assets/**',
    dest: staticPath + '/assets'
  },
  js: {
    src: src + '/js/**/**.js',
    dest: staticPath + '/js'
  },
  clean: {
    src: dest
  },
  browser: {
    server: dest
  }
}
