/**
 * Created by qq2575896094 on 2017/4/6.
 *
 *  文件路径配置
 */

const path = require('path');

const PATHS = {};

//文件根目录
PATHS.rootPath = './';

//文件夹的名字
PATHS.SRC_FOLDER = 'src';
PATHS.BOWER_COMPONENTS_FOLDER = 'bower_components';
PATHS.TMP_FOLDER = '.tmp';
PATHS.DIST_FOLDER = 'dist';
PATHS.TEMPLATES = 'templates';
PATHS.CONTROLLERS = 'controllers';
PATHS.COMPONENTS = 'components';

PATHS.SRC_DIR = path.resolve(PATHS.rootPath, PATHS.SRC_FOLDER); //  src/
PATHS.BOWER_COMPONENTS_DIR = path.resolve(PATHS.rootPath, PATHS.BOWER_COMPONENTS_FOLDER);// bower_components/
PATHS.TEMPLATES_DIR = path.resolve(PATHS.rootPath, PATHS.TEMPLATES); //  .tmp/
PATHS.TMP_DIR = path.resolve(PATHS.rootPath, PATHS.TMP_FOLDER); //  .tmp/
PATHS.DIST_DIR = path.resolve(PATHS.rootPath, PATHS.DIST_FOLDER);//  dist/


//源文件位置
PATHS.INDEX_HTML = PATHS.SRC_DIR + '/index.html';//src/index.html
PATHS.CONTROLLERS_DIR = path.resolve(PATHS.SRC_DIR, PATHS.CONTROLLERS);
PATHS.COMPONENTS_DIR = path.resolve(PATHS.SRC_DIR, PATHS.COMPONENTS);
// PATHS.sassFiles = PATHS.sourceDir + PATHS.stylesFolderName;   //src/css
// PATHS.jsFiles = PATHS.sourceDir + PATHS.scriptFolderName;     //src/js
// PATHS.iconFiles = PATHS.sourceDir + PATHS.iconFolderName;     //src/icons
// PATHS.imageFiles = PATHS.sourceDir + PATHS.imageFolderName;   //src/images


//输出文件的位置
// PATHS.assetFilesTemp = PATHS.tempDir + PATHS.assetsFolderName;
// PATHS.sassFilesTemp = PATHS.tempDir + PATHS.stylesFolderName;
// PATHS.jsFilesTemp = PATHS.tempDir + PATHS.scriptFolderName;
// PATHS.iconFilesTemp = PATHS.tempDir + PATHS.iconFolderName;
// PATHS.imageFilesTemp = PATHS.tempDir + PATHS.imageFolderName;
// PATHS.jsonFilesTemp = PATHS.tempDir + PATHS.jsonFolderName;
// PATHS.revCssFilesTemp = PATHS.tempDir + PATHS.revDir + PATHS.stylesFolderName;
// PATHS.revJsFilesTemp = PATHS.tempDir + PATHS.revDir + PATHS.scriptFolderName;

//静态文件位置
// PATHS.assetFilesSite = PATHS.siteDir + PATHS.assetsFolderName;
// PATHS.sassFilesSite = PATHS.siteDir + PATHS.assetsDir + PATHS.stylesFolderName;
// PATHS.jsFilesSite = PATHS.siteDir + PATHS.assetsDir + PATHS.scriptFolderName;
// PATHS.iconFilesSite = PATHS.siteDir + PATHS.assetsDir + PATHS.iconFolderName;
// PATHS.imageFilesSite = PATHS.siteDir + PATHS.assetsDir + PATHS.imageFolderName;


//文件匹配模式
PATHS.revJsonPattern = "/**/*.json";
PATHS.sassPattern = '/**/*.less';
PATHS.JS_PATTERN = '/**/*.js';
PATHS.imagePattern = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
PATHS.htmlPattern = '/**/*.html';


//文件匹配路径
PATHS.BOWER_COMPONENTS_JS_Glob = PATHS.BOWER_COMPONENTS_DIR + PATHS.JS_PATTERN;


// PATHS.htmlFilesGlob = PATHS.sourceFolderName + PATHS.htmlPattern;
// PATHS.imageFilesGlob = PATHS.imageFiles + PATHS.imagePattern;
// PATHS.jsFilesGlob = PATHS.jsFiles + PATHS.jsPattern;
// PATHS.sassFilesGlob = PATHS.sassFiles + PATHS.sassPattern;


module.exports = PATHS;