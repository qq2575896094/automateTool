/**
 * Created by qq2575896094 on 2017/4/5.
 */

const gulp = require('gulp');

const config = require('../../config').less;

const gulpLess = require('gulp-less'); //编译less文件

const gulpConcat = require('gulp-concat');//文件合并

const gulpRename = require('gulp-rename');//文件更名

const minifyCss = require('gulp-minify-css'); //css压缩

const gulpRev = require('gulp-rev');

const handleErrors = require('../../util/handleError');


gulp.task('buildLess', function () {
    return gulp.src(config.src)        //less源文件
        .pipe(gulpLess(config.settings))   //执行编译
        .pipe(gulpConcat('main.css'))
        .pipe(gulpRename({suffix: '.min'}))    //rename压缩后的文件名
        .pipe(minifyCss())
        .on('error', handleErrors)     //交给notify处理错误
        .pipe(gulpRev())
        .pipe(gulp.dest(config.dist))  //输出目录
        .pipe(gulpRev.manifest())
        .pipe(gulp.dest(config.rev));
});