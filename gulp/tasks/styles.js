import gulp from 'gulp';
import sass from 'gulp-sass';
import config from '../config';

export const sassBuild = () => (
    gulp.src(`${config.src.sass}/app.scss`)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${config.src.css}`))
);

export const sassWatch = () => gulp.watch(`${config.src.sass}/**/*.scss`, sassBuild);
