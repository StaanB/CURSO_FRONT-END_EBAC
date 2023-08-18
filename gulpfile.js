const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin")

sass.compiler = require("node-sass");

function compilaSass() {
  return gulp
    .src("./source/styles/*.sass")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("build/styles"));
}

function compilaJs(){
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function comprimeImagem(){
    return gulp.src("./source/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./build/images"))
}



exports.default = function () {
  gulp.watch(
    "./source/styles/*.sass",
    { ignoreInitial: false },
    gulp.series(compilaSass)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(compilaJs)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImagem)
  );
};
