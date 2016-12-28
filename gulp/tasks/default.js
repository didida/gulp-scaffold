// 默认任务

var gulp = require('gulp');

gulp.task('default', ['clean'], function () {
  gulp.start('postcss', 'html', 'images', 'javascripts', 'watch');
});
