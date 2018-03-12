/**
 * Created by qq2575896094 on 2017/4/5.
 */

const gulpNotify = require('gulp-notify');

module.exports = function () {
    var args = Array.prototype.slice.call(arguments);

    //Send error to notification center with gulp-notify
    gulpNotify.onError({
        title: "Compile Error",
        message: "<%=error.message %>"
    }).apply(this, args);

    //keep gulp form hanging on this task
    this.emit('end');
};