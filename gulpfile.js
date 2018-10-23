var gulp = require("gulp");
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


var babel = require("gulp-babel");
 
gulp.task("default", function () {
  return gulp.src("src/a.js")
    .pipe(babel())
    .pipe(gulp.dest("lib"));
});




 
gulp.task("browserify", function () {
var b = browserify({
  entries: "./lib/index.js",
  debug: true /*告知browserify在运行同时生成内联sourcemap用于调试*/
});
 
return b.bundle()
  .pipe(source("bundle.js"))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("./dist"));
});