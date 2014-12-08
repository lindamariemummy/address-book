'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      dev: {
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        expand: true,
        dest: 'build/'
      }
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }
      },

      test: {
        src: ['test/client.js'],
        dest: 'test/angular_testbundle.js',
        options: {
          transform: ['debowerify']
        }
      }
    },

    sass: {
      dist: {
        files: {
          'app/stylesheet.css': 'app/stylesheet.sass'
        }
      }
    },

    jshint: {
      options: {
        node: true,
        jshintrc: '.jshintrc'
      },
      src: ['Gruntfile.js', 'server.js', 'test/client.js', 'test/modules.js', 'test/server.js', 'routes/**/*.js', 'app/**/*.js', 'models/*.js']
    },

    jscs: {
      src: ['Gruntfile.js', 'server.js', 'test/client.js', 'test/modules.js', 'test/server.js', 'routes/**/*.js', 'app/**/*.js', 'models/*.js'],
      options: {
        config: '.jscsrc'
      }
    },

    test: {
      src: ['test/client.js'],
      dest: 'test/angular_testbundle.js',
      options: {
        transform: ['debowerify']
      }
    },

    karma: {
      unit: {
        configFile:'karma.conf.js'
      },
      continuous: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      }
    },

    simplemocha: {
      src: ['test/modules.js', 'test/server.js']
    }
  });

  grunt.registerTask('build', ['sass:dist', 'clean:dev', 'browserify:dev', 'copy:dev']);
  //grunt.registerTask('test:client', ['browserify:test', 'karma:unit']);
  //grunt.registerTask('test:server', ['jscs', 'jshint', 'simplemocha']);
  //grunt.registerTask('default', ['test:client', 'test:server']);
  grunt.registerTask('default', ['jscs', 'jshint']);
};
