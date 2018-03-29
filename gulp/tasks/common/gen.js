/**
 * Created by qq2575896094 on 12/03/2018.
 *
 * 创建文件
 *
 *
 */

const gulp = require('gulp');

const gulpUtil = require('gulp-util');

const gulpReplace = require('gulp-replace');

const argv = require('yargs').argv;

const gulpLoadPlugins = require("gulp-load-plugins");

const plugins = gulpLoadPlugins();

const runSequence = require('run-sequence');

const PATHS = require('../../pathConfigs');

gulp
    .task('generate', function () {

        console.log(argv);

        //获取输入的参数
        const appType = argv.type || 'special';
        const appFile = argv.file || 'special';
        const appName = argv.name || 'special';  //controller

        //模板地址
        const TEMPLATES_HTML = PATHS.TEMPLATES_DIR + '/ng/components/object/action.html';
        const TEMPLATES_JS = PATHS.TEMPLATES_DIR + '/ng/components/object/action.js';
        const TEMPLATES_SCSS = PATHS.TEMPLATES_DIR + '/ng/components/object/action.scss';

        var dist_dir = '';
        if (appType === 'comp') {
            dist_dir = PATHS.COMPONENTS_DIR + '/' + appFile;
        } else if (appType === 'route') {
            dist_dir = PATHS.CONTROLLERS_DIR + '/' + appFile;
        }

        return gulp.src([TEMPLATES_HTML, TEMPLATES_JS, TEMPLATES_SCSS])
            .pipe(plugins.rename({
                basename: appName
            }))
            .pipe(gulp.dest(dist_dir));
    })
    .task("gen", function (callback) {
        runSequence('generate', 'modify', 'tmp:inject', callback);
    });