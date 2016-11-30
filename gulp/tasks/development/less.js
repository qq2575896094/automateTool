/**
 *  Created by 雨田 on 2016/11/29.
 */

const gulp = require('gulp');

const config = require('../../config').less.development;

const gulpLess = require('gulp-less'); //编译less文件

const gulpConcat = require('gulp-concat');//文件合并

const rename = require('gulp-rename');//文件更名

const notify = require('gulp-notify');        // 提示信息

const minifyCss = require('gulp-minify-css'); //css压缩

const reName = require('gulp-rename');

const base64 = require('gulp-base64');

gulp.task('less', function () {
    return gulp.src(config.src)
        .pipe(gulpLess())
        .pipe(gulpConcat('main.css'))
        .pipe(reName({suffix: '.min'}))    //rename压缩后的文件名
        .pipe(minifyCss())
        .pipe(gulp.dest(config.dest));
});


// minifycss = require('gulp-minify-css'),    // css压缩
//         uglify = require('gulp-uglify'),        // js压缩
//          concat = require('gulp-concat'),        // 文件合并
//          rename = require('gulp-rename'),        // 文件更名
//          less = require('gulp-less'),            // less2css
//          notify = require('gulp-notify');        // 提示信息