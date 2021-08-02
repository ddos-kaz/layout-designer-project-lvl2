import browserSync from 'browser-sync';
import config from '../config';

function server (cb) {
    browserSync.create().init({
      server: {
        baseDir: config.src.root,
      },
      files: [
        `${config.src.html}/*.html`,
        `${config.src.css}/*.css`,
        {
            match: `${config.src.images}/**/*`,
            fn() {
                this.reload();
            }
        }
      ],
      open: false,
      notify: false,
    });

    cb();
}

export default server;