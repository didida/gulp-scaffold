// 压缩

var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('build', ['clean','postcss'], function () {
  gulp.start('cssmin', 'html', 'uglify');
});
