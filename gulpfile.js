/**
 *  Created by 雨田 on 2016/11/29.
 */



var requireDir = require('require-dir');

/**
 *  require-dir
 *  将 文件夹下面的所有文件 require进来
 */
requireDir('./gulp/tasks', { recurse: true });
