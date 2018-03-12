/**
 * Created by qq2575896094 on 2017/4/6.
 *
 *  文件路径配置
 */

const path = require('path');

var paths = {};

//文件根目录
paths.rootPath = path.resolve(__dirname, './../');

//文件夹的名字
paths.assetsFolderName = "assets";
paths.iconFolderName = "icons";
paths.includesFolderName = "_includes";
paths.imageFolderName = "images";
paths.layoutFolderName = "_layout";
paths.scriptFolderName = 'js';
paths.siteFolderName = 'dist';
paths.sourceFolderName = 'src';
paths.stylesFolderName = 'css';
paths.tempFolderName = '.tmp';
paths.jsonFolderName = 'rev';

paths.sourceDir = paths.sourceFolderName + '/'; //  src/
paths.assetsDir = paths.assetsFolderName + '/'; //  assets/
paths.tempDir = paths.tempFolderName + '/'; //  .tmp/
paths.siteDir = paths.siteFolderName + '/'; //  dist/
paths.revDir = paths.jsonFolderName+'/';


//源文件位置
paths.sassFiles = paths.sourceDir + paths.stylesFolderName;   //src/css
paths.jsFiles = paths.sourceDir + paths.scriptFolderName;     //src/js
paths.iconFiles = paths.sourceDir + paths.iconFolderName;     //src/icons
paths.imageFiles = paths.sourceDir + paths.imageFolderName;   //src/images


//输出文件的位置
paths.assetFilesTemp = paths.tempDir + paths.assetsFolderName;
paths.sassFilesTemp = paths.tempDir  + paths.stylesFolderName;
paths.jsFilesTemp = paths.tempDir  + paths.scriptFolderName;
paths.iconFilesTemp = paths.tempDir + paths.iconFolderName;
paths.imageFilesTemp = paths.tempDir  + paths.imageFolderName;
paths.jsonFilesTemp = paths.tempDir + paths.jsonFolderName;
paths.revCssFilesTemp = paths.tempDir+paths.revDir+paths.stylesFolderName;
paths.revJsFilesTemp = paths.tempDir+paths.revDir+paths.scriptFolderName;

//静态文件位置
paths.assetFilesSite = paths.siteDir + paths.assetsFolderName;
paths.sassFilesSite = paths.siteDir + paths.assetsDir + paths.stylesFolderName;
paths.jsFilesSite = paths.siteDir + paths.assetsDir + paths.scriptFolderName;
paths.iconFilesSite = paths.siteDir + paths.assetsDir + paths.iconFolderName;
paths.imageFilesSite = paths.siteDir + paths.assetsDir + paths.imageFolderName;


//文件匹配模式
paths.revJsonPattern = "/**/*.json";
paths.sassPattern = '/**/*.less';
paths.jsPattern = '/**/*.js';
paths.imagePattern = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.htmlPattern = '/**/*.html';


//文件匹配路径
paths.htmlFilesGlob = paths.sourceFolderName + paths.htmlPattern;
paths.imageFilesGlob = paths.imageFiles + paths.imagePattern;
paths.jsFilesGlob = paths.jsFiles + paths.jsPattern;
paths.sassFilesGlob = paths.sassFiles + paths.sassPattern;

module.exports = paths;