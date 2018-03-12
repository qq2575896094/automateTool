/**
 *  Created by 雨田 on 2016/11/28.
 */


const gulp = require('gulp');

const config = require('../../config');

/**
 * Start browserSync task and then watch files for changes
 */
gulp.task('watch', ['browserSync'], function () {


    gulp.watch(config.less.src,['less']);
    // gulp.watch(config.js.src,['js']);
    // gulp.watch(config.lib.development.src,['lib']);
    // gulp.watch(config.images.src,['images']);
    // gulp.watch(config.views.development.src,['views']);
    // gulp.watch(config.index.development.src,['index']);
});