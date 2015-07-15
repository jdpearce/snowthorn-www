module.exports = function(grunt) {

    grunt.config('connect', {
        server: {
            options: {
                port : 58883,
                protocol: 'http',
                base: '_build'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-connect');
};