module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // concatenate js file, lib folder and main.js
        concat: {
            dist: {
                src: [
                    'js/lib/*.js',
                    'js/main.js'
                ],
                dest: 'build/js/main.js'
            }
        },

        // minify the scripts concatenated file 
        uglify: {
            build: {
                src: 'build/js/main.js',
                dest: 'build/js/main.min.js'
            }
        },

        // compile less files
        less: {
            development: {
                options: {
                    paths: ['css'],
                },
                files: {
                    'css/main.css': 'build/css/main.css'
                }
            }
        },

        // build HTML partials
        htmlbuild: {
            dist: {
                src: '*.html',
                dest: 'build/',
                options: {
                    sections: {
                        layout: {
                            head: 'fixtures/layout/head.html',
                            header: 'fixtures/layout/header.html',
                            footer: 'fixtures/layout/footer.html'
                        },
                        pages: {
                            index: 'index.html',
                            prodotti: 'prodotti.html',
                            servizi: 'servizi.html',
                            contatti: 'contatti.html'
                        }
                    }
                }
            }
        },

        // automate and watch for file changes
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/*.css'],
                tasks: ['less', 'build'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['*.html', 'fixtures/layout/*.html', 'fixtures/pages/*.html'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        }
    });

    // load grunt tasks modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');

    // register named tasks to use in the CLI
    grunt.registerTask('default', ['concat', 'uglify', 'less:development']);
    grunt.registerTask('auto', ['concat', 'uglify', 'less:development', 'watch']);
    grunt.registerTask('build', ['htmlbuild']);
}