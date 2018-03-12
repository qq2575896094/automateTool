/**
 *  Created by 雨田 on 2016/11/28.
 */


const gulp = require('gulp');

const runSequence = require('run-sequence');

const config = require('../../config');


/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function (callback) {
    runSequence('delete',
        [
            'less',
            'js',
            'lib',
            'images',
            'views',
            'index'
            // 'copy:fonts'
        ],
        'base64',
        callback
    );
});