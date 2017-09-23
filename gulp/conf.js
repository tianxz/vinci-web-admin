"use strict";

var gutil = require('gulp-util');

/**
 *  项目主要路径配置
 */
exports.paths = {
    src: 'docs/build',
    dist: 'release',
    devDist: 'dev-release',
    tmp: '.tmp',
    e2e: 'e2e'
};

/**
 *  Wiredep配置项
 *  Wiredep是从bower库中将js及其依赖和css注入的html中
 */
exports.wiredep = {
    exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/require\.js/],
    directory: 'bower_components'
};

/**
 *  Gulp 插件错误处理
 */
exports.errorHandler = function (title) {
    'use strict';

    return function (err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};