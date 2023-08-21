module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            production: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"],
                tasks: ["less:production"]
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dist']
            }
        },
        replace: {
            dist: {
                options: {
                    patterns: [
                        {
                            match: "ENDERECO_DO_CSS",
                            replacement: './styles/main.min.css'
                        },
                        {
                            match: "ENDERECO_DO_JS",
                            replacement: './scripts/main.min.js'
                        }
                    ]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html'],
                    dest: 'dist/'
                }]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-less")
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-replace")
    grunt.loadNpmTasks("grunt-contrib-uglify")


    grunt.registerTask('default', ["watch"])
    grunt.registerTask("build", ['less:production', 'replace:dist', 'uglify'])
}