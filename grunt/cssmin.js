module.exports = function(grunt) {
	grunt.config('cssmin', {
		  build: {
		    files: {
		      '_build/css/site.css': [ 'src/**/*.css' ]
		    }
		  }
		});
		
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};