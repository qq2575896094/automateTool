/**
 *  Created by 雨田 on 2016/11/30.
 */

const gulp = require('gulp');

/**
 *
 * gulp-ng-annotate
 * 处理angularJs依赖注入
 *
 * 使用前
 * angular.module('app', [])
 *    .controller('AppCtrl', function($scope) {
 *        // 别的代码
 *    })
 *
 *使用后
 * angular.module('app', [])
 *    .controller('AppCtrl', ['$scope', function($scope) {
 *          // 别的代码
 *     }])
 */
const gulpNgAnnotate = require('gulp-ng-annotate');

/**
 * gulp-angular-filesort
 *   可以认为是调整顺序,防止模块未注册就使用.
 *
 * 使用前
 * [$injector:modulerr]
 *
 * To:
 *    each angular file needs to have a uniquely named module and setter syntax (with the brackets),
 *    i.e. angular.module('myModule', []).
 */
const angularFilesort = require('gulp-angular-filesort');

const gulpNgMin = require('gulp-ngmin');

const gulpConcat = require('gulp-concat');

const reName = require('gulp-rename');

const gulpStripDebug = require('gulp-strip-debug');

const config = require('../../config').js;

const gulpUglify = require('gulp-uglify');

gulp.task('js',function () {
    gulp.src(config.src)
        .pipe(angularFilesort())
        .pipe(gulpConcat('main.js'))
        .pipe(gulpNgMin({dynamic: false}))
        .pipe(reName({suffix: '.min'}))    //rename压缩后的文件名
        .pipe(gulpNgAnnotate())
        .pipe(gulpStripDebug())   //除去js代码中的console和debugger输出
        .pipe(gulpUglify({     //压缩
            // mangle: true,//类型：Boolean 默认：true 是否修改变量名
            mangle: {except: ['require', 'exports', 'module', '$']},//排除混淆关键字
            compress: true,//类型：Boolean 默认：true 是否完全压缩
            // preserveComments: 'all' //保留所有注释
            outSourceMap: false
        }))
        .pipe(gulp.dest(config.dest));

});