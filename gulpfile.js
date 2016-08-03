var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon')
var browserify = require('gulp-browserify');
var injectHTML = require('gulp-js-html-inject');

gulp.task('start',() =>{
  nodemon({
    script: './bin/www',
    env: { 'NODE_ENV': 'development' }
  })
});
gulp.task('app', function(){
  gulp.src('src/js/app.js')
    .pipe(browserify({ debug: true }))
    .pipe(injectHTML({
      basepath: 'src/js/templates'
    }))
    .pipe(gulp.dest('public/'))
});
gulp.task('script', function(){
  gulp.src('src/js/script.js')
    .pipe(browserify({ debug: true }))
    .pipe(injectHTML({
      basepath: 'src/js/templates'
    }))
    .pipe(gulp.dest('public/'))
});
gulp.task('sass', function(){
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/'))
});
gulp.task('watch', function(){
  gulp.watch('src/js/**/*.*', ['script']);
  gulp.watch('src/js/**/*.*', ['app']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['start', 'app', 'sass', 'watch']);
