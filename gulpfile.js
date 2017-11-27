var gulp = require('gulp'),
	sass = require('gulp-sass'),
	njx = require('gulp-nunjucks-render'),
	plumber = require('gulp-plumber');

var paths = {
	css : './css',
	html : './html',
	sass : './sass',
	njx : './njx',
	js : './js'
};

gulp.task('sass', function() {
	return gulp.src(paths.sass + '/*.sass')
	.pipe(plumber())
	.pipe(sass())
	.pipe(gulp.dest(paths.css));
} )

gulp.task('njx', function() {
	return gulp.src(paths.njx + '/*.html')
	.pipe(plumber())
	.pipe(njx({
		path: paths.njx
	}))
	.pipe(gulp.dest(paths.html));
})

gulp.task('default', ['sass', 'njx'], function() {
})

gulp.watch(['njx/*.html'], ['njx'])
gulp.watch(['sass/*.sass'], ['sass'])