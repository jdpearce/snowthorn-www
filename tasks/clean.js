module.exports = function(grunt) {
	grunt.config('clean', {
			build: {
				src: ['_build']
			},
			stylesheets: {
    			src: [ '_build/**/*.css', '!_build/css/site.css' ]
  			},	
		});

	grunt.loadNpmTasks('grunt-contrib-clean');
};