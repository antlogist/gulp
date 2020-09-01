const gulp = require("gulp");
const rigger = require("gulp-rigger");
const plumber = require("gulp-plumber");
const htmlValidator = require("gulp-w3c-html-validator");
// Vars
const vars = require('./vars');

module.exports = function riggerFunc(cb) {
    return gulp
        .src("templates/" + vars.folder + "/src/index.html")
        .pipe(plumber())
        .pipe(rigger())
        .pipe(htmlValidator())
        .pipe(gulp.dest('templates/' + vars.folder + '/dest'));
}
