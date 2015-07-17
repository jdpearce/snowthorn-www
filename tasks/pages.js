module.exports = function(grunt) {

    grunt.config('pages', {
      options: {
        rss: {
          title: "The Snowthorn Blog",
          description: "A blog about building technology systems for people.",
          url: "http://www.snowthorn.co.uk/blog"
        }
      },
      posts: {
          src: 'posts',
          dest: '_build/blog',
          layout: 'layouts/post.jade',
          url: ':title/index.html'
      }
    });
    
    grunt.loadNpmTasks('grunt-pages');
};