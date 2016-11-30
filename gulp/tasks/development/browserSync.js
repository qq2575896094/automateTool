/**
 *  Created by 雨田 on 2016/11/28.
 */


const gulp = require('gulp');

const browserSync = require('browser-sync');

const config = require('../../config').browserSync.development;


gulp.task('browserSync',['build'], function () {
    browserSync(config);
});