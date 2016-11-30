/**
 *  Created by 雨田 on 2016/11/30.
 */

const gulp = require('gulp');

const config = require('../../config').lib.development;

gulp.task('lib', function () {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});