// 保留sass，使用postcss

var gulp = require('gulp');
// var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var px3rem = require('gulp-px3rem');
var sourcemaps = require('gulp-sourcemaps');
var filter = require('gulp-filter');
var prefix = require('gulp-autoprefixer');
var reload = require('browser-sync').create().reload;
var config = require('../config').css;
var handleErrors = require('../util/handleErrors');
var browserSync = require("browser-sync").create();

gulp.task('postcss', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    // .pipe(sass(config.settings))
    .pipe(postcss([require('postcss-salad')]))
    .on('error', handleErrors)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(reload({stream: true}))
    .pipe(sourcemaps.write())
    // .pipe(px3rem({baseDpr: 1, remUnit: 10}))
    .pipe(gulp.dest(config.dest))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.reload({stream: true}))
});
