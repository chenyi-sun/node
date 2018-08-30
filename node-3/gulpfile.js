var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var ejs = require("gulp-ejs");
var reload = browserSync.reload;
var through = require("through2");
var del = require('del');
var common = require('./common.js').common;

gulp.task('copy1', function(){
    return gulp.src('public/html/*/*/*')
    .pipe(gulp.dest('html'));
});

gulp.task('copy1', function(){
    return gulp.src('public/html/*/*/*')
    .pipe(gulp.dest('html'));
});

//** ===== dist start =====  */ dist页面 用来测试生成的页面样式
let distname = common.disthome;
gulp.task('dist-scss', function(){ //dist的样式处理
    return gulp.src('public/staticpublic/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('dist-plugins', function(){ //dist的样式处理
    return gulp.src(['public/staticpublic/plugins/**/*'])
        .pipe(gulp.dest('dist/plugins'));
});
gulp.task('dist-js', function(){ //dist的样式处理
    return gulp.src(['public/staticpublic/js/*/*','public/staticpublic/js/*'])
        .pipe(gulp.dest('dist/js'));
});
gulp.task('dist-ejs', function(){ //打包ejs文件打包ejs文件
    var all = require('./public/staticpublic/json/index.js');
    return gulp.src("./public/html/*/"+distname+".ejs")
        .pipe(
            ejs(all[distname],{},{
                ext: '.html'
            })
        )
        .pipe(gulp.dest("./dist"));
});

gulp.task('dist-serve', function(){
    browserSync({
        server: {
            baseDir: 'dist/'
        }
    });
    gulp.watch(['html/*/*'], {cwd: 'public'}, ['dist-ejs',reload]);
    gulp.watch(['staticpublic/scss/*'], {cwd: 'public'}, ['dist-scss',reload]);
    gulp.watch(['staticpublic/js/*','staticpublic/js/*/*'], {cwd: 'public'}, ['dist-js','dist-ejs',reload]);
    gulp.watch(['staticpublic/json/*'], {cwd: 'public'}, ['dist-js','dist-ejs',reload]);
});

// 删除 dist 文件 
gulp.task('clean:dist', function(cb){
    del([
        'dist/report.csv',
        'dist/*',
        '!dist/all.json'
    ], cb);
});

gulp.task('clean', ['clean:dist']);

// gulp dist 任务
gulp.task('dist-gulp',['dist-scss', 'dist-ejs', 'dist-js', 'dist-plugins']);
gulp.task('dist',['dist-scss', 'dist-ejs', 'dist-js' ,'dist-plugins','dist-serve']);
//** ===== dist end =====  */

//** ===== html start =====  */ html页面用来把页面打包到html目录下面，生成页面
gulp.task('html-scss', function(){
    return gulp.src('public/staticpublic/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/html/staticpublic/css'))
});

gulp.task('html-js', function(){
    return gulp.src(['public/staticpublic/js/*.js','public/staticpublic/js/*/*'])
        .pipe(gulp.dest('public/html/staticpublic/js'))
});
gulp.task('copy-to-html', function(){
    return gulp.src(['public/html/*/*','public/html/*/*/*'])
    .pipe(gulp.dest('html'));
});

gulp.task('html',['html-scss', 'copy-to-html','html-js']);
//** ===== html end =====  */

gulp.task('start', ['html','dist']);
gulp.task('start-noserve', ['html','dist']);

