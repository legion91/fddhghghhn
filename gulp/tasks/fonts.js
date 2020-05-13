module.exports = function () {
	$.gulp.task('fonts', function () {
		return $.gulp.src('src/fonts/*.woff2')
				.pipe($.gulp.dest('build/fonts/'));
	});
};