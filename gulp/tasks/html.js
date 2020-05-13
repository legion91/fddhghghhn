module.exports = function () {
	$.gulp.task('html', function () {
		return $.gulp.src('src/index.html')
				.pipe($.gp.htmlmin({collapseWhitespace: true}))
				.pipe($.gulp.dest('build/'))
				.on('end', $.bs.reload);
	});
}