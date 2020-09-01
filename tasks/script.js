const gulp = require("gulp");
const plumber = require("gulp-plumber");
var concat = require("gulp-concat");
const babel = require("gulp-babel");

// Vars
const vars = require("./vars");

module.exports = function script() {
    return gulp
        .src([
            "./libs/js/fontawesome-5/custom.js",
            "templates/" + vars.folder + "/src/js/main.js"
            
        ])
        .pipe(plumber())
        .pipe(
            babel({
                presets: ["@babel/env"]
            })
        )
        .pipe(concat('main.js'))
        .pipe(gulp.dest("templates/" + vars.folder + "/dest/js"));
};
