/**
 *  Created by 雨田 on 2016/11/28.
 */

const path = require('path');

const httpProxyMiddleWare = require('http-proxy-middleware');

const proxyConfig = require('../proxyConfig');

const pathsConfig = require('./pathConfigs');


module.exports = {
    revCollector: {//md5静态资源部署解决方案
        revJson: pathsConfig.jsonFilesTemp,
        src: pathsConfig.sourceDir + '/index.html',  //src index.html
        dist: pathsConfig.assetFilesTemp
    },
    browserSync: {
        develop: {
            server: {
                baseDir: pathsConfig.tempDir,//服务器根目录
                middleware: [httpProxyMiddleWare(proxyConfig.path, proxyConfig.options)]
            },
            port: 8000,
            files: []
        }
    },
    clean: {
        src: [pathsConfig.tempDir]
    },
    indexHtml: {
        src: '',
        build: ''
    },
    base64: {
        src: pathsConfig.imageFilesTemp,
        dist: pathsConfig.imageFilesTemp,
        options: {
            baseDir: pathsConfig.imageFilesTemp,
            extensions: ['png', 'svg', 'jpg', 'jpeg'],
            maxImageSize: 100 * 1024,//bytes
            debug: false
        }
    },
    delete: {
        src: pathsConfig.tempDir
    },
    less: {
        all: pathsConfig.sassFilesGlob,//所有less
        src: pathsConfig.sassFilesGlob,//需要编译的less
        dist: pathsConfig.sassFilesTemp,//输出目录
        rev: pathsConfig.revCssFilesTemp,
        settings: {} //编译less过程需要的配置,可以为空
    },
    js: {
        src: pathsConfig.jsFiles,
        dist: pathsConfig.jsFilesTemp,
        rev: pathsConfig.revJsFilesTemp
    }
};