/**
 * Created by qq2575896094 on 2017/4/5.
 */

const gulpUtil = require('gulp-util');
const prettyHrtime = require('pretty-hrtime');
var startTime;

module.exports = {
    start: function (filePath) {
        startTime = process.hrtime();
        gulpUtil.log("Bundling", gulpUtil.colors.green(filePath));
    },
    end: function (filePath) {
        var taskTime = process.hrtime(startTime);
        var prettyTime = prettyHrtime(taskTime);
        gulpUtil.log("Bundled", gulpUtil.colors.green(filePath), 'in', gulpUtil.colors.magenta(prettyTime))
    }
}