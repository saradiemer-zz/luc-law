var gulp = require('gulp');
var replace = require('gulp-replace');
var htmlreplace = require('gulp-html-replace');

var config = {
    publicDir: './public',
	T4Dir: './T4',
};

gulp.task('t4_navigation', function() {
      // place code for your default task here
      console.log('[gulp]: T4');
	  
	
	 
    
	
	//gulp.src(config.publicDir + '/index.html')
   
	//.pipe(replace('University', 'UnivXXXXXXsdfsf'))
	
	
    //.pipe(gulp.dest(config.T4Dir));
	
	gulp.src(config.publicDir + '/*.html')
    .pipe(htmlreplace({
        'globalquicklinks': '<t4 type="media" id="77813" formatter="plain/text"/>',
		
       
    }, {
  keepUnassigned: false,
  keepBlockTags: true,
  resolvePaths: false
}))
    .pipe(gulp.dest(config.T4Dir));
	  
      
    });