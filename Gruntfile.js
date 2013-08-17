module.exports = function( grunt ) {

	'use strict';

	grunt.initConfig({

		// Ler o arquivo package.json, para pegar informações do projeto
		pkg : grunt.file.readJSON( 'package.json' ),
		banner : '/*!\n' +
			' * <%= pkg.title %>\n' +
			' * version: <%= pkg.version %> (<%= grunt.template.today( "dddd, dd mmmm yyyy" ) %>)' +
			' * requires jQuery v1.7 or later' +
			' *\n' +
			' * Examples at <%= pkg.homepage %>\n' +
			' * License: <%= pkg.licenses %>\n' +
			' *\n' +
			' * Copyright <%= grunt.template.today( "yyyy" ) %> <%= pkg.author.name %> - <%= pkg.author.url %>\n' +
			' *\n' +
			' */',

		uglify : {
			options : {
				mangle : true,
				banner : '<%= banner %>'
			},

			js : {
				files : {
					'dist/js/jquery.sexyforms.min.js' : 'src/jquery.sexyforms.js'
				}
			}
		}, // uglify



		jshint : {
			options : {
				jshintrc : '.jshintrc'
			},

			all : [ 'Gruntfile.js', 'src/jquery.sexyforms.js' ]
		},



		compass : {
			dist : {
				options : {
					sassDir : 'themes',
					cssDir : 'dist/themes',
					outputStyle : 'expanded'
				}
			}
		}, // compass



		watch : {
			dist : {
				files : [
					'src/jquery.sexyforms.js',
					'themes/*'
				],

				tasks : [ 'compass', 'uglify', 'jshint', 'notify:notify_default' ]
			}
		}, // watch



		// Notificações
		notify : {
			notify_default : {
				options : {
					title : '<%= pkg.title %>',
					message : 'Compilação finalizada!'
				}
			}
		}

	});


	// Plugins Grunt
	require( 'matchdep' ).filterDev( 'grunt-*' ).forEach( grunt.loadNpmTasks );

	// Tarefa Default
	grunt.registerTask( 'default', [ 'compass', 'uglify', 'jshint', 'notify:notify_default' ] );

	// Tarefas para watch
	grunt.registerTask( 'w', [ 'watch:dist' ] );

};