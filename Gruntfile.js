module.exports = function(grunt) {

	//Defining Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

			watch: {
					  scripts: {
					    files: ['**/*.css'],
					    tasks: ['cssmin'],
					    options: {
					      spawn: false,
					    },
					  },
					},

			sass: {
				
					options: {
				            sourcemap: 'none',
				            
				        },

				    dist: {
				      files: [{
				        expand: true,
				        cwd: 'scss',
				        src: ['*.scss'],
				        dest: 'css',
				        ext: '.css'
				      }]
				    }
				  },

			postcss: {

				    options: {
				      
				      map: {
				          inline: false, // save all sourcemaps as separate files...
				          annotation: 'css/maps/' // ...to the specified directory
				      },

				      processors: [
				        //require('pixrem')(), // add fallbacks for rem units
				        require('autoprefixer')({browsers: 'last 4 versions'}), // add vendor prefixes
				      ]
				    },
				    dist: {
				      src: 'css/*.css'
				    }
				  },

			cssmin: {
					  target: {
					    files: [{
					      expand: true,
					      cwd: 'css',
					      src: ['*.css', '!*.min.css'],
					      dest: 'css',
					      ext: '.min.css'
					    }]
					  }
					}

			 uglify: {
			    options: {
			      mangle: true
			    },
			    target: {
			      files: {
			        expand: true,
		            cwd: 'js',
		            src: '*.js',
		            dest: 'js'
			      }
			    }
			  }
	});
	

		//Loading Tasks 
		grunt.loadNpmTasks('grunt-contrib-watch');//Watch for any changes accure then excute task
		grunt.loadNpmTasks('grunt-contrib-sass');//Compile Scss/Sass to css
		grunt.loadNpmTasks('grunt-postcss');//Add vendor prefixes to css properties
		grunt.loadNpmTasks('grunt-contrib-cssmin');//Minify css files
		grunt.loadNpmTasks('grunt-contrib-uglify');//Minify js files

		//registering task
		grunt.task.registerTask('default', ['sass','postcss','cssmin','uglify']);
};