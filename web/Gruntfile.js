module.exports = function (grunt) {

    grunt.initConfig({

	    uglify: {
	        files: {
	            src: ['assets/js/src/*.js'],
	            dest: 'assets/js/build/',
	            expand: true,
	            flatten: true,
	            ext: '.min.js'
	        }
	    },
	    concat: {
	      options: {
	        separator: ';'
	      },
	      dist: {
	        src: ['assets/js/vendor/jquery-1.11.1.min.js', 'assets/js/vendor/sweetalert.min.js',  'assets/js/build/app.min.js', 'assets/js/build/ga.min.js'],
	        dest: 'assets/js/app.min.js'
	      },

	    },
	    autoprefixer: {
				options: {
					browsers: ['last 50 versions', 'ie 6', 'ie 7', 'ie 8', 'ie 9']
    		},
				dist: {
					files: {
						'assets/css/global.min.css': 'assets/css/global-noprefix.min.css'
					}
				}
	    },
	    watch: {
	        js:  { files: 'assets/js/src/*.js', tasks: [ 'uglify', 'concat' ] },
	        css: { files: 'assets/css/global-noprefix.min.css', tasks: ['autoprefixer'] },
          html: { files: 'src/*.html', tasks: [ 'simple_include', 'minifyHtml' ] }
	    },
      simple_include: {
        your_target: {
          src: ['src/*.html'],
          dest: 'src/../build/'
        },
      },
			minifyHtml: {
        options: {
            cdata: false,
            comments: false
        },
        dist: {
            files: {
                'build/../index.html': 'build/index.html',
                'build/../contact.html': 'build/contact.html',
                'build/../header.html': 'build/header.html',
                'build/../footer.html': 'build/footer.html',
                'build/../projects.html': 'build/projects.html',
                'build/../social.html': 'build/social.html'
            }
        }
    	}
	});

	// load plugins
	grunt.loadNpmTasks('grunt-simple-include');
  grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-minify-html');



	// register at least this one task
	grunt.registerTask('default', [ 'uglify', 'concat', 'autoprefixer', 'simple_include', 'minifyHtml' ]);

};
