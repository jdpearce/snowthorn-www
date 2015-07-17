module.exports = function(grunt) {
	grunt.config('copy', {
			build : {
				cwd: 'src',
				src: ['**'],
				dest: '_build',
				expand: true
			}
		});
	
	grunt.loadNpmTasks('grunt-contrib-copy');
};