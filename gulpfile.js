'use strict';

var gulp   = require('gulp');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');
const imagemin = require('gulp-imagemin');

gulp.task('images', function()
{
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img'))
});

gulp.task('coffee', function() {
  gulp.src('./src/scripts/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('stylus', function () {
  return gulp.src('./src/styles/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'));
});

// Options
// Options compress
gulp.task('compress', function () {
  return gulp.src('./src/styles/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./public/css'));
});


gulp.task('stylus:watch', function () {
    gulp.watch('./src/styles/*.styl', ['stylus']);
});

gulp.task('coffee:watch', function () {
    gulp.watch('./src/scripts/*.coffee', ['coffee']);
});

//gulp.task('default', ['image']);
