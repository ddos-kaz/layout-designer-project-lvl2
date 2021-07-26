'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

let build = gulp.series(buildStyles);

function buildStyles() {
  return gulp.src('./src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
};

function watchSettings() {
    gulp.watch('./src/scss/**/*.scss', gulp.series(buildStyles));  
}

exports.build = build;

exports.watch = gulp.series(build, watchSettings);