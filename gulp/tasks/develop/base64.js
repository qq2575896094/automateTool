/**
 *  Created by 雨田 on 2016/11/28.
 */



const gulp = require('gulp');

const base64 = require('gulp-base64');

const config = require('../../config').base64;

/**
 * Replace urls in CSS fies with base64 encoded data
 */

gulp.task('base64', ['less'], function () {
    return gulp.src(config.src)
        .pipe(base64(config.options))
        .pipe(gulp.dest(config.dest));
});