/**
 *  Created by 雨田 on 2016/11/28.
 */

const gulp = require('gulp');

const gulpChanged = require('gulp-changed');

const config = require('../../config').images;

gulp.task('images', function () {
    return gulp.src(config.src)
        .pipe(gulpChanged(config.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.dest));
});