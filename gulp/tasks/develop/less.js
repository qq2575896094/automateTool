/**
 *  Created by 雨田 on 2016/11/29.
 */

const gulp = require('gulp');

const config = require('../../config').less;

const gulpLess = require('gulp-less'); //编译less文件

const gulpConcat = require('gulp-concat');//文件合并

const gulpRev = require('gulp-rev');

const handleErrors = require('../../util/handleError');


gulp.task('developLess', function () {
    return gulp.src(config.src)        //less源文件
        .pipe(gulpLess(config.settings))   //执行编译
        .pipe(gulpConcat('main.css'))
        .on('error', handleErrors)     //交给notify处理错误
        .pipe(gulpRev())
        .pipe(gulp.dest(config.dist))  //输出目录
        .pipe(gulpRev.manifest())
        .pipe(gulp.dest(config.rev));
});