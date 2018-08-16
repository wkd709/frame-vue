'use strict';
var gulp = require('gulp');
var minify = require('gulp-clean-css');//- 缩css文件，减小文件大小
var browserSync = require('browser-sync');//- 静态服务器
var nodemon = require('gulp-nodemon');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');//- 专业压缩 Javascript
var htmlmin = require('gulp-htmlmin'); //- 压缩html
var imagemin = require('gulp-imagemin');//-  除了能压缩常见的图片格式，还能压缩 SVG
var less = require('gulp-less');//- 压缩less,并且转换为css
var path = require('path');//- 路径
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');//- 这插件是管合并的   恭喜，“减少网络请求”的成就达成 
var jshint = require('gulp-jshint');//- JavaScript 代码校验
var cssBase64 = require('gulp-base64');
var del = require('del');//-  删除
var rev = require('gulp-rev'); //- 对文件名加MD5后缀  (把静态文件名改成hash的形式。)
var revCollector = require('gulp-rev-collector');  //- 路径替换 (替换 HTML 中的路径)
var rename = require('gulp-rename');//- 文件重名
var runSequence = require('run-sequence'); //- 执行顺序
var babel = require("gulp-babel");

// 删除文件
gulp.task('clean', function(cb) {
    del('dist')
});

// 压缩ejs
gulp.task('ejs', function() {
  return gulp.src('views/**/*.ejs')
//    .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist/views/'));
});

// 压缩less
gulp.task('less', function () {
  return gulp.src('public/css/**/*.less')
      .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(cssBase64())
      .pipe(minify())
      .pipe(gulp.dest('dist/css/'));
});
// 压缩 css 文件
gulp.task('css', function() {
    return  gulp.src('public/css/**/*.css')
        .pipe(minify())
        .pipe(gulp.dest('dist/css/'));
});
// 压缩js
gulp.task('js', function () {
    return gulp.src('public/js/**/*.js')
        // es6转es5
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(jshint())
        .pipe(uglify({ compress: true }))
        .pipe(gulp.dest('dist/js/'))
});


// 打包插件
gulp.task('tools', function () {
  return gulp.src('public/tools/**/*')
      .pipe(gulp.dest('dist/tools/'));
});

// 压缩img
gulp.task('img', function() {  
  return gulp.src('public/images/**/*')        //引入所有需处理的Img
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))      //压缩图片
    // 如果想对变动过的文件进行压缩，则使用下面一句代码
    // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))) 
    .pipe(gulp.dest('dist/images/'))
    // .pipe(notify({ message: '图片处理完成' }));
});
// 压缩img
gulp.task('static', function() {  
  return gulp.src('public/static/**/*')        //引入所有需处理的Img
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))      //压缩图片
    // 如果想对变动过的文件进行压缩，则使用下面一句代码
    // .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))) 
    .pipe(gulp.dest('dist/static/'))
    // .pipe(notify({ message: '图片处理完成' }));
});

// 浏览器同步，用7000端口去代理Express的3000端口
gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:8081",
        files: ["dist/views/*.*","dist/css/*.*","dist/js/*.*","dist/images/*.*"],
        browser: "google chrome",
        port: 7000
  });
});

// 开启Express服务
gulp.task('nodemon', function (cb) {
  
  var started = false;
  
  return nodemon({
    script: 'bin/www'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true; 
    } 
  });
});

gulp.task('build',['less','js','img','tools','static','css','ejs'],function () {
    gulp.watch('public/css/**/*', ['less']);
    gulp.watch('public/js/**/*', ['js']);
    gulp.watch('public/tools/**/*', ['tools']);
    gulp.watch('public/images/**/*', ['img']);
    gulp.watch('public/static/**/*', ['static']);
    gulp.watch(['views/**/**/*'], ['ejs']);
});
gulp.task('default',['build']);

/**
 * 打包时 压缩并且js css文件名添加md5后缀防止缓存  
 *   运行步骤： 1、 gulp clean
 *             2、 gulp zip
 */


// 压缩less/css
gulp.task('revLess', function () {
  return gulp.src(['public/css/**/*.less','public/css/**/*.css'])
      .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(rename(function (path){
        path.extname = '.css'
      }))
      .pipe(rev())
      .pipe(cssBase64())
      .pipe(minify())
      .pipe(gulp.dest('dist/css/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('rev/css'));
});

// 压缩js
gulp.task('revJs', function () {
    return gulp.src('public/js/**/*.js')
        // es6转es5
        .pipe(babel({
          presets: ['es2015']
        }))
        .pipe(rename(function (path){
          path.extname = '.js'
        }))
        .pipe(rev())
        .pipe(jshint())
        .pipe(uglify({ compress: true }))
        .pipe(gulp.dest('dist/js/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/js'));
});

gulp.task('revEjs',function () {
  return gulp.src(['./rev/**/*.json','./views/**/*.ejs'])
  .pipe(revCollector({
    replaceReved: true
  }))
  .pipe(gulp.dest('dist/views/'))
});

gulp.task('zip',function (done) {
  // 依照顺序打包
  runSequence(
    ['img'],
    ['tools'],
    ['static'],
    ['revLess'],
    ['revJs'],
    ['revEjs'],
    done)
})