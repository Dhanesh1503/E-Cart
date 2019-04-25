/* gulpfile.js
 * This file is used to process .scss files and compile them to css.
 * @Author: Dhanesh Pant
 */
var gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  concat = require('gulp-concat'),
  cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
  return gulp.src('app/styles/**/*.scss')
        .pipe($.sourcemaps.init())
        .pipe($.sass().on('error', $.sass.logError))
		    .pipe(concat('application/app.css'))
		    .pipe(cleanCSS())
        .pipe($.stripCssComments())
		    .pipe($.autoprefixer({
             browsers: ['last 2 versions'],
             cascade: false
           }))
        .pipe(gulp.dest('./dist/css'));
})

gulp.task('css:watch', function() {
  gulp.watch('app/styles/**/*.scss', ['css']);
});

gulp.task('css:build', ['css'], function() {
  return gulp.src('./dist/**/*.css')
        .pipe(gulp.dest('./dist'));
})
