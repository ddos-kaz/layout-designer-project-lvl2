import gulp from 'gulp';
import server from './gulp/tasks/server';
//let sass = require('gulp-sass')(require('sass'));
import { sassBuild, sassWatch } from './gulp/tasks/styles';

let build = gulp.series(sassBuild);

/* function buildStyles() {
  return gulp.src('./src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
}; */

//function watchSettings() {
//    gulp.watch('./src/scss/**/*.scss', gulp.series(buildStyles, server));  
//}

exports.build = build;

exports.watch = gulp.series(
  sassWatch
);
