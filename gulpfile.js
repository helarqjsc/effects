/* global require */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var bowerFiles = require('main-bower-files');

var src = 'app/assets/';
var out = 'public/assets/';

var js_src = src + 'javascripts/';
var js_out = out + 'javascripts/';
var main_js_files = [
  js_src + '*.js',
  js_src + 'home/*.js',
  js_src + 'admin/*.js'
];

var css_src = src + 'stylesheets/';
var css_out = out + 'stylesheets/';

gulp.task('libs', function() {
  return gulp  
    .src(bowerFiles().concat([
        js_src + "libs/modernizr.custom.js", 
        js_src + "libs/*.js"
      ]))
    .pipe($.concat("libs.js"))
    // .pipe($.uglify())
    .pipe(gulp.dest(js_out));
});

gulp.task("js", function() {
  return gulp
    .src(main_js_files)
    // .pipe($.ngAnnotate())
    // .pipe($.uglify())
    .pipe($.concat("application.js"))
    .pipe(gulp.dest(js_out));
});


gulp.task("css", function() {
  return gulp
  .src([
    css_src + "*.scss",
    css_src + "libs/*.scss"
    ])
  .pipe($.sass({errLogToConsole: true}))
  .pipe($.concat("application.css"))
  // .pipe($.minifyCss({
  //     keepBreaks: true,
  //     processImport: false
  //   }))
  .pipe(gulp.dest(css_out));
});


gulp.task('watch', function() {
  gulp.watch([
    css_src + "*.scss",
    css_src + "libs/*.scss"
    ], ['css']);
  gulp.watch(main_js_files, ['js']);
  gulp.watch(['bower_components/**/*'], ['libs']);
  return gulp.watch([js_src + 'lib/*.js'], ['libs']);
});

gulp.task('default', ['libs', 'js', 'css','watch']);