let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css');

console.log('Initializing web styling ..');

gulp.copy = function(src, dest) {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
};

gulp.task('styles', function() {
    console.log('Compiling WEB styles ..');

    // update css
    gulp.src(__dirname + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/web/'));
});

// Watch task
gulp.task('default', ['styles'], function() {
    // watch files
    gulp.watch('_variables.scss', ['styles', 'shell-style']);

    gulp.watch(__dirname + '/**/*.scss', ['styles']);
});

module.exports = gulp;