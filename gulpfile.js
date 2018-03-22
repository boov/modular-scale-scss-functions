"use strict";

let gulp = require("gulp");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");

gulp.task("scss", () => {
  return gulp
    .src(["tests/tests.scss"])
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("tests/"));
});

gulp.task("watch", () => {
  gulp.watch("tests/tests.scss", ["scss"]);
});

gulp.task("default", ["scss", "watch"]);
