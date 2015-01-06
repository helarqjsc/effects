var $, clean, coffee, concat, concatCss, csscomb, gulp, gulpif, imageop, minifyCSS, order, out, runSequence, src, uglify;
gulp = require('gulp');
$ = require('gulp-load-plugins')();
src = '';
out = '';
order = require("gulp-order");
concat = require("gulp-concat");
gulp = require("gulp");
clean = require('gulp-clean');
imageop = require("gulp-image-optimization");
runSequence = require('run-sequence');
coffee = require('gulp-coffee');
gulpif = require('gulp-if');
gulp - (uglify = require('gulp-uglify'));
gulp = require('gulp');
csscomb = require('gulp-csscomb');
minifyCSS = require('gulp-minify-css');
concatCss = require('gulp-concat-css');

gulp.task("connect", function() {
  return $.connect.server({
    root: ".",
    port: 1338,
    livereload: true
  });
});

gulp.task("scripts", function() {
  return gulp.src([src + "js/libs/jquery-1.10.2.min.js", src + "js/libs/modernizr.custom.js", src + "js/libs/modernizr.custom.js", src + "js/libs/classie.js", src + "js/libs/pathLoader.js", src + "js/libs/*.*"]).pipe(concat("libs.js")).pipe(gulp.dest(out + 'js'));
});

gulp.task("copyJs", function() {
  return gulp.src([src + "/js/func.js", src + "/js/*.*"]).pipe(concat("main.js")).pipe(gulp.dest(out + '/js'));
});

gulp.task("reloadJs", function() {
  return gulp.src([src + 'js/*.js']);
});

gulp.task("css-copy", function() {
  return gulp.src(src + "/css/**/*.*").pipe(gulp.dest(out + '/css'));
});

gulp.task("css-min", function() {
  return gulp.src([src + "css/libs/*.css"]).pipe(concat("libs.css")).pipe(minifyCSS({
    keepBreaks: true,
    processImport: false
  })).pipe(gulp.dest(out + 'css'));
});

gulp.task("copy-img", function() {
  return gulp.src(src + "/img/**/*.*").pipe(gulp.dest(out + '/img'));
});

gulp.task('watch', function() {
  gulp.watch([src + 'js/libs/*.js'], ['scripts']);
  gulp.watch([src + 'css/libs/*.css'], ['css-min']);
  return gulp.watch([src + 'js/*.js'], ['reloadJs']);
});

gulp.task('default', ['scripts', 'css-min', 'watch']);