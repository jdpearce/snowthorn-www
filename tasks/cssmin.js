module.exports = function(grunt) {
	grunt.config('cssmin', {
		  build: {
		    files: {
		      '_build/css/site.css': [ 'src/css/normalize.css', 'src/css/snowthorn.css', 'src/css/code-highlighting.css']
		    }
		  }
		});
		
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};