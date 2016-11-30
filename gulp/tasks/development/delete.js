/**
 *  Created by 雨田 on 2016/11/28.
 */

const gulp = require('gulp');

const del = require('del');

const config = require('../../config').delete;


/**
 * Delete folders and files
 */
gulp.task('delete',function (callback) {
    return del(config.src,callback);
});