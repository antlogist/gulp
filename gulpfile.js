const gulp = require("gulp");
const riggerIndex = require("./tasks/riggerIndex");
const style = require("./tasks/style");
const script = require("./tasks/script");
const browserSync = require("browser-sync").create();
// Vars
const vars = require("./tasks/vars");

function watch() {
    // FIRST LOADING
    riggerIndex();
    style();
    script();
    // BS
    browserSync.init({
        server: {
            baseDir: "./templates/" + vars.folder + "/dest"
        }
    });
    // HTML
    gulp.watch("./templates/" + vars.folder + "/src/**/*.html").on(
        "change",
        riggerIndex
    );
    // SCSS
    gulp.watch("./templates/" + vars.folder + "/src/**/*.scss").on(
        "change",
        style
    );
    // JS
    gulp.watch("./templates/" + vars.folder + "/src/**/*.js").on(
        "change",
        script
    );
    // DEST
    gulp.watch([
        "./templates/" + vars.folder + "/dest/**/*.html",
        "./templates/" + vars.folder + "/dest/**/*.css",
        "./templates/" + vars.folder + "/dest/**/*.js"
    ]).on("change", browserSync.reload);
}

// EXPORT
module.exports.watch = gulp.series(watch);
