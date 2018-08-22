var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var ejs = require("gulp-ejs");
var reload = browserSync.reload;

gulp.task('sa', function(){
    return gulp.src('public/staticpublic/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/html/staticpublic/css'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('copy1', function(){
    return gulp.src('public/html/*/*/*')
    .pipe(gulp.dest('html'));
});

gulp.task('serve', function(){
    browserSync({
        server: {
            baseDir: 'dist/'
        }
    });
});

gulp.task('copy1', function(){
    return gulp.src('public/html/*/*/*')
    .pipe(gulp.dest('html'));
});

gulp.task('distejs', function(){ //打包ejs文件
    return gulp.src("./public/html/*/*.ejs")
        .pipe(
            ejs({
                showValue: 'sdds',
                isinput: true,
                url: "./../" 
            },{},{
                ext: '.html'
            })
        )
        .pipe(gulp.dest("./dist"));
});
// gulp.sec