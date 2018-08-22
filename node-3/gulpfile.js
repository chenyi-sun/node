var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sa', function(){
    return gulp.src('public/staticpublic/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/staticpublic/css'));
});

gulp.task('copy1', function(){
    return gulp.src('public/staticpublic/css/*')
    .pipe(gulp.dest('public/html/staticpublic/css'));
});

gulp.task('copy1', function(){
    return gulp.src('public/html/*/*/*')
    .pipe(gulp.dest('html'));
});

