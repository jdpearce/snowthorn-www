module.exports = function(grunt) {
	grunt.initConfig({
		clean : {
			build: {
				src: ['_build']
			},
			stylesheets: {
    			src: [ '_build/**/*.css', '!_build/css/site.css' ]
  			},	
		},
		
		cssmin : {
		  build: {
		    files: {
		      '_build/css/site.css': [ 'src/**/*.css' ]
		    }
		  }
		},		
		
		copy: {
			build : {
				cwd: 'src',
				src: ['**'],
				dest: '_build',
				expand: true
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	grunt.registerTask(
  		'stylesheets', 
  		'Compiles the stylesheets.', 
  		[ 'cssmin', 'clean:stylesheets' ]
	);
	
	// The default task. Calling grunt without parameters will run this one.
	grunt.registerTask(
  		'default', 
  		'Compiles all of the assets and copies the files to the build directory.', 
  		[ 'clean:build', 'copy', 'stylesheets']
	);
};