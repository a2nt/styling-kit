var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('gulp-exec');

console.log('Initializing GNOME theme ..');

gulp.task('styles', function() {
    console.log('Compiling GTK theme ..');

    gulp.src(__dirname + '/gtk-3.0/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(__dirname + '/gtk-3.0/'))

    gulp.src(__dirname + '/gtk-3.20/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(__dirname + '/gtk-3.20/'))
        .pipe(exec('gsettings set org.gnome.desktop.interface gtk-theme "Default" && gsettings set org.gnome.desktop.interface gtk-theme "Ant-Dracula-Purple"'))
});

gulp.task('shell-style', function() {
    console.log('Compiling GNOME Shell theme ..');

    gulp.src(__dirname + '/gnome-shell/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(__dirname + '/gnome-shell/'))
        .pipe(exec('gsettings set org.gnome.desktop.interface gtk-theme "Ant-Dracula-Purple"'))
        .pipe(exec('gsettings set org.gnome.desktop.wm.preferences theme "Ant-Dracula-Purple"'))
});

// Watch task
gulp.task('default', ['styles', 'shell-style'], function() {
    gulp.watch(__dirname + '/gtk-3.0/**/*.scss', ['styles']);
    gulp.watch(__dirname + '/gtk-3.20/**/*.scss', ['styles']);
    gulp.watch(__dirname + '/gnome-shell/*.scss', ['shell-style']);
});

module.exports = gulp;