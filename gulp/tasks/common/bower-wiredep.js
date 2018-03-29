/**
 * Created by qq2575896094 on 12/03/2018.
 */

const gulp = require('gulp');
const wiredep = require('wiredep').stream;
const PATHS = require('../../pathConfigs');

gulp.task('inject.bower', function () {
    gulp.src(PATHS.INDEX_HTML)
        .pipe(wiredep({
            optional: 'configuration',
            goes: 'here'
        }))
        .pipe(gulp.dest(PATHS.SRC_DIR));
});