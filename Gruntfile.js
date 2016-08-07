module.exports = function(grunt) {

	//Defining Configuration
	grunt.initConfig({
		    sass:{
		    	dist : {
		    		files : [{
		    			expand : true,
		    			cwd : 'scss',
		    			src : 'materialarc.scss',
		    			dest : 'css',
		    			ext : '.css'
		    		}]
		    	}
		    },
		    postcss:{
		    	opions:{
		    		 map: true,
	                processors: [
	                    require('autoprefixer')({
	                        browsers: ['last 4 versions']
	                    })
	                ]
		    	},
		    	dist:{
		    		src: 'css/materialarc.css'
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
			},
		    uglify:{
		    	target: {
			      files: [{
			          'js/materialarc.min.js' : 'js/materialarc.js'
			      }]
			    }
		    },
		    watch:{
		    	watchsass:{
		    		files: 'scss/*.scss',
					tasks: ['sass','postcss','cssmin']
		    	},
		    	watchjs:{
		    		files: 'js/materialarc.js',
					tasks: ['uglify'],
		    	}
		    }
	});
	

		//Loading Tasks 
		grunt.loadNpmTasks('grunt-contrib-sass');//Compile Scss/Sass to css
		grunt.loadNpmTasks('grunt-postcss');//Add vendor prefixes to css properties
		grunt.loadNpmTasks('grunt-contrib-cssmin');//Minify css files
		grunt.loadNpmTasks('grunt-contrib-uglify');//Minify js files
		grunt.loadNpmTasks('grunt-contrib-watch');//Watch for any changes accure then excute task

		//registering task
		grunt.task.registerTask('default', ['watch']);
};