var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename') 


gulp.task('css', function(){
	gulp.src('styles/**/**/**/*.css')
		.pipe(minifyCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist'))
	gulp.watch('styles/**/**/**/*.css', ['css'])
});

