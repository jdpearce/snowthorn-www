module.exports = function(grunt) {
	grunt.initConfig({
		pkg : require('./package.json')
	});
	
	grunt.loadTasks('grunt');

	grunt.registerTask(
  		'stylesheets', 
  		'Compiles the stylesheets.', 
  		[ 'cssmin', 'clean:stylesheets' ]
	);
	
	grunt.registerTask(
  		'rebuild', 
  		'Compiles all of the assets and copies the files to the build directory.', 
  		[ 'clean:build', 'copy', 'stylesheets']
	);

	grunt.registerTask(
  		'default', 
  		'Rebuilds, runs connect and then sits watching the src folder.', 
  		[ 'rebuild', 'connect', 'watch']
	);
};