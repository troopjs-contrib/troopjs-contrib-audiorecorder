/*global module:false*/
module.exports = function (grunt) {

  var path = require('path');
  require("load-grunt-tasks")(grunt);

  grunt.registerTask("default", [
    //'jshint:source',
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'copy:dist',
    'requirejs-transformconfig:dist',
    'requirejs',
    'concat',
    'clean:after-dist'
  ]);

  grunt.registerTask('release', [
    'clean:release',
    'default',
    'cssmin',
    'copy:release'
  ]);

  grunt.registerTask('serve', function () {
    grunt.task.run([
      'clean:dist',
      'concurrent:dist',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  function includeSource(patterns) {
    return grunt.util._.map(grunt.file.expand(patterns), function (file) {
      return ['<%= pkg.name %>', file.replace(/\.js$/, '')].join('/');
    });
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerDir: 'bower_components',
    clean: {
      dist: 'dist/',
      'after-dist': ['dist/<%= bowerDir %>', 'dist/main.js'],
      release: 'release/'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      source: {
        src: ['Gruntfile.js', 'main.js', 'widget/**/*.js']
      },
      spec: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/*.spec.js']
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            src: ['css/{,*/}*.css', 'widget/**', 'img/**', '<%= bowerDir %>/**/*'],
            dest: 'dist'
          }
        ]
      },
      'release': {
        files: {
          'release/<%= pkg.version %>/': 'dist/**/*'
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ['css/{,*/}*.less']
        },
        files: {
          'css/main.css': 'css/main.less'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/main.min.css': [
            'dist/css/{,*/}*.css'
          ]
        }
      }
    },
    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: 'dist/css/',
            src: 'css/{,*/}*.css',
            dest: 'dist/css/'
          }
        ]
      }
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      js: {
        files: ['widget/{,*/}*.js'],
        options: {
          livereload: true
        }
      },
      css: {
        files: ['css/{,*/}*.less'],
        tasks: ['less', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'index.html',
          'widget/{,*/}*.html',
          'css/{,*/}*.css',
          'img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    // The actual grunt server settings
    connect: {
      options: {
        port: 8010,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            './'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            'test',
            './'
          ]
        }
      },
      dist: {
        options: {
          base: 'dist/'
        }
      }
    },
    'requirejs-transformconfig': {
      options: {
        // Some transformation goes here.
        transform: function (config) {
          // Remove all packages;
          delete config.packages;
          return config;
        }
      },
      dist: {
        files: [
          {
            'dist/main.js': 'main.js'
          }
        ]
      }
    },
    requirejs: {
      dist: {
        options: {
          baseUrl: 'dist',
          mainConfigFile: 'main.js',
          out: 'dist/nodeps.js',
          include: includeSource(['widget/**/*.js', 'main.js']),
          optimize: 'none'
        }
      }
    },
    concat: {
      dist: {
        src: ['<%= bowerDir %>/requirejs/require.js', 'dist/nodeps.js'],
        dest: 'dist/nodeps.js'
      }
    },
    uglify: {
      dist: {
        src: [ , 'dist/nodeps.js'],
        dest: 'dist/nodeps.min.js'
      }
    },
    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist/'
      }
    },
    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/css/{,*/}*.css'],
      options: {
        assetsDirs: ['dist/']
      }
    },
    // The following *-min tasks produce minified files in the dist folder
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: {
          'dist/index.html': 'index.html'
        }
      }
    },
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '/img',
            src: '{,*/}*.{png,jpg,jpeg,gif}',
            dest: 'dist/img'
          }
        ]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      'release': [
        'less',
        'imagemin',
        'htmlmin'
      ],
      dist: [
        'less',
        'imagemin',
        'htmlmin'
      ]
    }
  });
};