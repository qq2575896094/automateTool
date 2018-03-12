/**
 * Created by qq2575896094 on 2017/4/5.
 */

const gulp = require('gulp');

const handleErrors = require('../util/handleError');

const config = require('../config').views;


gulp.task('html', function () {
    return gulp.src(config.src)
        .on("error", handleErrors)
        .pipe(gulp.dest(config.dist))
});