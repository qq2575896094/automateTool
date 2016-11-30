/**
 *  Created by 雨田 on 2016/11/30.
 */

const gulp = require('gulp');

const cheerio = require('gulp-cheerio');

const config = require('../../config').index.development;

gulp.task('index', function () {
    gulp.src(config.src)
        .pipe(cheerio(function ($) {
            config.linkArr.forEach(function (ele) {
                $('head').append('    <link rel="stylesheet" href="' + ele + '">\n');
            });
            config.scriptArr.forEach(function (ele) {
                $('body').append('<script src="' + ele + '"></script>\n');
            });
        }))
        .pipe(gulp.dest(config.dest));
});