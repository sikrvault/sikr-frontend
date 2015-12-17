// Copyright 2014-2016 Clione Software
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

// Get necessary packages
var gulp       = require('gulp'),
    uglify     = require('gulp-uglify'),
    jshint     = require('gulp-jshint'),
    concat     = require('gulp-concat'),
    compass    = require('gulp-compass'),
    cssmin     = require('gulp-cssmin'),
    ngAnnotate = require('gulp-ng-annotate'),
    gutil      = require('gulp-util'),
    stylish    = require('jshint-stylish'),
    runSequence= require('run-sequence'),
    fs         = require('fs'),
    del        = require('del'),
    imagemin   = require('gulp-imagemin'),
    pngquant   = require('imagemin-pngquant');

// Read the package.json for variables
var pkg = JSON.parse(fs.readFileSync('./package.json'));

// Step 0: Clear out the destination directory
gulp.task('clean', function() {
  return del([
      pkg.dest_paths.js,
      pkg.dest_paths.css,
      pkg.dest_paths.fonts,
      pkg.dest_paths.images
    ], {
      force: true
    })
})

// Step 1: JSHint to review the Javascript before building
gulp.task('jshint', function() {
  return gulp.src(pkg.src_paths.js + '**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
});

// Step 2: Pre-minify (annotate) the AngularJS application
gulp.task('ngAnnotate', function() {
  return gulp.src(pkg.src_paths.js + '**/*.js')
    .pipe(ngAnnotate({
      remove: false,
      add: true,
      single_quotes: true
    }))
    .pipe(gulp.dest(pkg.dest_paths.js + 'ngproject'));
});

// Step 3: Concatenate all the JavaScript files together
gulp.task('concat', function() {
  return gulp.src([
      pkg.project_paths.bower_folder + 'jquery/dist/jquery.min.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.accordion.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.alert.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.offcanvas.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.tab.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.reveal.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.topbar.js',
      pkg.project_paths.bower_folder + 'foundation/js/foundation/foundation.abide.js',
      pkg.project_paths.bower_folder + 'notifyjs/dist/notify-combined.min.js',
      pkg.project_paths.bower_folder + 'uri.js/src/URI.min.js',
      pkg.project_paths.bower_folder + 'angular/angular.min.js',
      pkg.project_paths.bower_folder + 'satellizer/satellizer.min.js',
      pkg.project_paths.bower_folder + 'angularjs-crypto/public/js/lib/angularjs-crypto.js',
      pkg.dest_paths.js + 'ngproject/**/*.js'
    ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest(pkg.dest_paths.js))
});

// Step 4: Minify JavaScript
gulp.task('uglify', function() {
  return gulp.src(pkg.dest_paths.js + 'app.js')
    .pipe(uglify())
    .pipe(gulp.dest(pkg.dest_paths.js))
});

// Step 5: Compile SCSS, minify and concatenate it
gulp.task('compass', function() {
  return gulp.src(pkg.src_paths.scss + '**/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: pkg.dest_paths.css,
      sass: pkg.src_paths.scss,
      debug: false,
      comments: false,
      logging: false,
      sourcemap: true,
      time: true
    }))
    .pipe(cssmin({showLog:true}))
    .pipe(gulp.dest(pkg.dest_paths.css))
});

// Step 6: Copy fonts
gulp.task('copyfonts', function() {
  return gulp.src(pkg.src_paths.fonts + '*')
    .pipe(gulp.dest(pkg.dest_paths.fonts));
});

// Step 7: Copy images
gulp.task('copyimg', function() {
  return gulp.src(pkg.src_paths.images + '*')
    .pipe(gulp.dest(pkg.dest_paths.images));
});

// Step 8: Minify images
gulp.task('imgmin', function() {
  return gulp.src(pkg.src_paths.images + '*')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest(pkg.dest_paths.images));
});
// Step 8: Clean unnecesary files (this shouldnt be needed!)
gulp.task('endclean', function() {
  return del([
      pkg.dest_paths.js + 'ngproject',
    ], {
      force: true
    })
})

// Main GULP tasks
gulp.task('default', function() {
  return runSequence('clean', 'jshint', 'ngAnnotate', 'concat', 'uglify', 'compass', 'copyfonts', 'imgmin', 'endclean')
})

gulp.task('watch', function () {
    gulp.watch([pkg.src_paths.scss + '**/*.scss', pkg.src_paths.js + '**/*.js'], ['default']);
});
