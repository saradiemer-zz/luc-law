var gulp = require('gulp');
var replace = require('gulp-replace');

var config = {
    publicDir: './public',
		T4Dir: './T4',
};

gulp.task('t4_media', function() {
	gulp.src(config.publicDir)
	//change references	in html
	.pipe(replace('/css/styles.css', '<t4 type="media" id="444511" formatter="path/*"/>'))
	.pipe(replace('/js/all.min.js', '<t4 type="media" id="444527" formatter="path/*"/>'))
	//send to t4Dir
	.pipe(gulp.dest(config.T4Dir));
});