module.exports = function(grunt) {
	grunt.initConfig({
		pkg : require('./package.json')
	});
	
	grunt.loadTasks('tasks');

	grunt.registerTask(
  		'stylesheets', 
  		'Compiles the stylesheets.', 
  		[ 'cssmin', 'clean:stylesheets' ]
	);
	
	grunt.registerTask(
  		'rebuild', 
  		'Compiles all of the assets and copies the files to the build directory.', 
  		[ 'clean:build', 'copy', 'stylesheets', 'pages']
	);
	
	grunt.registerTask(
  		'blog', 
  		'Simply cleans the build folder and runs pages.', 
  		[ 'clean:build', 'pages']
	);
	
	grunt.registerTask(
  		'default', 
  		'Rebuilds, runs connect and then sits watching the src folder.', 
  		[ 'rebuild', 'connect', 'watch']
	);
};