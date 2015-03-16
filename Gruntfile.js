// Copyright 2014 Clione Software and Havas Worldwide London
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the License at http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // JSHint to review JS code before build
    jshint: {
      files: [
        '<%= pkg.src_paths.js %>**/*.js',
      ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          alert: true,
          document: true,
          window:true
        }
      }
    },

    // Pre-minify angular application
    ngAnnotate: {
      options: {
        remove: false, // Do not remove any annotations
        singleQuotes: true,
      },
      dist: {
        files: {
          '<%= pkg.dest_paths.js %>ngproject.js': ['<%= pkg.src_paths.js %>**/*.js']
        },
      },
    },

    // Concatenation of JS
    concat: {
      options: {
        separator: ';;\n\n'
      },
      dist: {
        src: [
          '<%= pkg.project_paths.bower_folder %>jquery/dist/jquery.min.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.accordion.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.alert.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.offcanvas.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.tab.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.reveal.js',
          '<%= pkg.project_paths.bower_folder %>foundation/js/foundation/foundation.topbar.js',
          '<%= pkg.project_paths.bower_folder %>notifyjs/dist/notify-combined.min.js',
          '<%= pkg.project_paths.bower_folder %>uri.js/URI.min.js',
          '<%= pkg.project_paths.bower_folder %>angular/angular.min.js',
          '<%= pkg.project_paths.bower_folder %>satellizer/satellizer.min.js',
          '<%= pkg.dest_paths.js %>ngproject.js',
        ],
        dest: '<%= pkg.dest_paths.js %>app.js'
      },
    },

    // Minification of JS
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%= pkg.dest_paths.js %>app.js': ['<%= concat.dist.dest %>'],
          //'<%= pkg.dest_paths.js %>base.js': ['<%= concat.dist.dest %>'],
        }
      },
      dev: {
        files: {
          '<%= pkg.dest_paths.js %>modernizr.min.js': ['<%= pkg.project_paths.bower_folder %>modernizr/modernizr.js']
        }
      }
    },

    // CSSmin to minify CSS on production
    cssmin: {
        minify:{
        expand: true,
        cwd: '<%= pkg.dest_paths.css %>',
        src: ['*.css',],
        dest: '<%= pkg.dest_paths.css %>',
        ext: '.css'
      }
    },

    // Compass to handle CSS compilation and concatanation
    compass: {
      dist: {
        options: {
          config: "config.rb"
        }
      }
    },

    // Copy fonts and images to build output directory
    copy: {
      dist: {
        files: [
          // Fonts
          {
            expand: true,
            cwd: '<%= pkg.src_paths.fonts %>',
            src: ['**/*', '!**/*.json'],
            dest: '<%= pkg.dest_paths.fonts %>'
          },
          // Images
          {
            expand: true,
            cwd: '<%= pkg.src_paths.images %>',
            src: '**/*',
            dest: '<%= pkg.dest_paths.images %>'
          }
        ]
      }
    },

    // Watch task to compile files live
    watch: {
      js:{
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat']
      },
      scss: {
        files: ['<%= pkg.src_paths.scss %>**/**/*.scss'],
        tasks: ['compass']
      },
      images: {
        files: [
          '<%= pkg.src_paths.images %>**/*.jpg',
          '<%= pkg.src_paths.images %>**/*.gif',
          '<%= pkg.src_paths.images %>**/*.png'
        ],
        tasks: ['copy']
      },
      fonts: {
        files: [
          '<%= pkg.src_paths.fonts %>**/*.eot',
          '<%= pkg.src_paths.fonts %>**/*.woff',
          '<%= pkg.src_paths.fonts %>**/*.svg',
          '<%= pkg.src_paths.fonts %>**/*.ttf'
        ],
        tasks: ['copy']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('default', 'build');
  grunt.registerTask('testangular', ['ngAnnotate:dist']);
  //grunt.registerTask('build', ['jshint', 'concat', 'uglify:dev', 'compass', 'copy']);
  grunt.registerTask('dist', ['jshint', 'ngAnnotate:dist', 'concat:dist', 'uglify', 'compass', 'cssmin', 'copy']);
};
