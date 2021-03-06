'use strict';

global.$ = {
	gulp: require('gulp'),
	gp: require('gulp-load-plugins')(),
	bs: require('browser-sync').create(),
	
	path: {
		tasks: require('./gulp/config/tasks.js')
	}
}

$.path.tasks.forEach(function (taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
		$.gulp.parallel('html', 'sass', 'scripts:lib', 'scripts', 'fonts', 'img', 'svg'),
		$.gulp.parallel('watch', 'serve')
));
