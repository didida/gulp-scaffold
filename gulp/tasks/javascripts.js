
var gulp = require('gulp');
var config = require('../config').js;
var babel = require('gulp-babel')

gulp.task('javascripts', function () {
  return gulp.src(config.src)
      .pipe(babel({
        plugins: ['transform-runtime']
      }))
      .pipe(gulp.dest(config.dest))
});
