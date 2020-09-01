const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
//const sourcemaps = require("gulp-sourcemaps");
const Fiber = require("fibers");
const autoprefixer = require("gulp-autoprefixer");
const shorthand = require('gulp-shorthand')
const browserSync = require("browser-sync").create();

// Vars
const vars = require("./vars");

module.exports = function styles() {
    return gulp
        .src("templates/" + vars.folder + "/src/style/style.scss")
        .pipe(plumber())
//        .pipe(sourcemaps.init())
        .pipe(sass({ fiber: Fiber }).on("error", sass.logError))
        .pipe(
            autoprefixer(
                [
                    "last 15 versions",
                    ">1%",
                    "IE 7",
                    "IE 8",
                    "IE 9",
                    "last 5 versions",
                    "Firefox 14",
                    "Opera 11.1"
                ],
                {
                    cascade: false
                }
            )
        )
        .pipe(shorthand())
//        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("templates/" + vars.folder + "/dest/style"));
};
