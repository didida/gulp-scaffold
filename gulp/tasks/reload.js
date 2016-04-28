// 监听文件自动刷新浏览器

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('reload', function () {
  browserSync.reload();
});
