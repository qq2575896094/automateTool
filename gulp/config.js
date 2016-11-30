/**
 *  Created by 雨田 on 2016/11/28.
 */

const src = 'src';
const build = 'build';
const development = 'build/development';
const production = 'build/production';
const srcAssets = 'src/_assets';
const developmentAssets = 'build/assets';
const productionAssets = 'build/production/assets';

const httpProxyMiddleWare = require('http-proxy-middleware');

const proxyConfig = require('../proxyConfig');

const path = require('path');


module.exports = {
    browserSync: {
        development: {
            server: {
                baseDir: [development, build],
                middleware: [httpProxyMiddleWare(proxyConfig.path, proxyConfig.options)]
            },
            port: 8000,
            files: [
                development + '/index.html',
                development + '/views/**/*.html',
                development + '/css/*.css',
                development + '/js/*.js',
                development + '/images/**',
                development + '/lib/**/*',
                development + '/fonts/*'
            ]
        },
        production: {
            server: {
                baseDir: [production]
            },
            port: 9000
        }
    },
    delete: {
        src: [development]
    },
    styles: {
        src: srcAssets + '/styles/*.css',
        dest: developmentAssets + '/css',
        options: {
            precss: {},
            autoprefixer: {
                browsers: [
                    'last 2 versions',
                    'safari 5',
                    'ie 8',
                    'ie 9',
                    'opera 12.1',
                    'ios 6',
                    'android 4'
                ],
                cascade: true
            },
            mqpacker: {}
        }
    },
    less: {
        development: {
            src: src + '/less/**/*.less',
            dest: development + '/css'
        },
        production: {
            src: src + '/less/**/*.less',
            dest: production + '/less'
        }
    },
    js: {
        development: {
            src: src + '/js/**/*.js',
            dest: development + '/js'
        },
        production: {
            src: src + '/js/**/*.js',
            dest: production + '/js'
        }
    },
    lib: {
        development: {
            src: src + '/lib/**/*.{js,css}',
            dest: development + '/lib'
        },
        production: {
            src: src + '/lib/**/*.js',
            dest: production + '/lib'
        }
    },
    views: {
        development: {
            src: src + '/views/**/*.html',
            dest: development + '/views'
        },
        production: {
            src: src + '/views/**/*.html',
            dest: production + '/views'
        }
    },
    index: {
        development: {
            src: src + '/index.html',
            dest: development,
            linkArr: [
                './css/main.min.css',
                './lib/swiper-3.3.1.min.css'
            ],
            scriptArr: [
                './lib/angular/angular.js',
                'http://api.map.baidu.com/api?v=2.0&ak=32611e788be5f50b58a4809a3343c339',
                './lib/angular-ui-router/release/angular-ui-router.min.js',
                './lib/angular-animate/angular-animate.min.js',
                './lib/angular-touch/angular-touch.min.js',
                './lib/swiper-3.3.1.min.js',
                './lib/ng-dialog/js/ngDialog.min.js',
                './js/main.min.js'
            ]
        },
        production: {
            src: src + '/index.html',
            dest: production
        }
    }
    images: {
        src: src + '/images/**/*',
        dest: development + '/images'
    },
    base64: {
        src: development + '/css/*.css',
        dest: development + '/css',
        options: {
            // baseDir: './build/images',  //基础目录
            extensions: ['png', 'svg', 'jpg', 'jpeg'],
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }
    }
   
};