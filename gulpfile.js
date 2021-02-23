'use strict';

const gulp            = require('gulp');
const minify          = require('gulp-minify');
const sass            = require('gulp-dart-sass');
const autoprefixer    = require('gulp-autoprefixer');
const concat          = require('gulp-concat');

const outputDirectory = 'dist/';
const sassOptions     = {
	outputStyle: 'expanded'
};
 
gulp.task('sass', function () {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass(sassOptions).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(outputDirectory + 'css'));
});

gulp.task('compress-script', function() {
	return gulp.src('src/js/script.js')
		.pipe(minify())
		.pipe(gulp.dest(outputDirectory + 'js'));
});

gulp.task('concat', function() {
	return gulp.src('src/js/vendor/*.js')
	  .pipe(concat('vendor.js'))
	  .pipe(minify())
	  .pipe(gulp.dest(outputDirectory + 'js'));
 });

gulp.task('watch', function(done) {
	gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('src/js/vendor/*.js', gulp.series('concat'));
	gulp.watch('src/js/script.js', gulp.series('compress-script'));

	done();
});