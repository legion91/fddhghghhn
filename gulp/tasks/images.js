module.exports = function () {
	$.gulp.task('img', function () {
		return $.gulp.src('src/img/*.webp')
				.pipe($.gulp.dest('build/img/'));
	});
};