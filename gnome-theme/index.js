var gulp = require('gulp'),
    sass = require('gulp-sass'),
    exec = require('gulp-exec');

console.log('Initializing GNOME theme ..');

gulp.copy = function(src, dest) {
    return gulp.src(src)
        .pipe(gulp.dest(dest));
};

gulp.task('styles', function() {
    console.log('Compiling GTK theme ..');

    // copy assets
    gulp.copy(__dirname + '/index.theme', 'dist/gnome-theme');
    gulp.copy(__dirname + '/assets/*', 'dist/gnome-theme/assets');
    gulp.copy(__dirname + '/gnome-shell/assets/*', 'dist/gnome-theme/gnome-shell/assets');
    gulp.copy(__dirname + '/gtk-2.0/*', 'dist/gnome-theme/gtk-2.0');
    gulp.copy(__dirname + '/gtk-2.0/*/*', 'dist/gnome-theme/gtk-2.0');
    gulp.copy(__dirname + '/gtk-3.0/apps/*', 'dist/gnome-theme/gtk-3.0/apps');
    gulp.copy(__dirname + '/gtk-3.0/apps/*', 'dist/gnome-theme/gtk-3.0/widgets');
    gulp.copy(__dirname + '/gtk-3.0/settings.ini', 'dist/gnome-theme/gtk-3.0');
    gulp.copy(__dirname + '/gtk-3.0/*.css', 'dist/gnome-theme/gtk-3.0');

    gulp.copy(__dirname + '/metacity-1/*', 'dist/gnome-theme/metacity-1');
    gulp.copy(__dirname + '/unity/*', 'dist/gnome-theme/unity');
    gulp.copy(__dirname + '/xfwm4/*', 'dist/gnome-theme/xfwm4');
    gulp.copy(__dirname + '/xfwm4/*/*', 'dist/gnome-theme/xfwm4');

    // update css
    gulp.src(__dirname + '/gtk-3.0/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/gnome-theme/gtk-3.0/'))

    gulp.src(__dirname + '/gtk-3.20/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/gnome-theme/gtk-3.20/'))
        .pipe(exec('gsettings set org.gnome.desktop.interface gtk-theme "Default" && gsettings set org.gnome.desktop.interface gtk-theme "Ant-Dracula-Purple"'))
});

gulp.task('shell-style', function() {
    console.log('Compiling GNOME Shell theme ..');

    // copy assets
    gulp.copy(__dirname + '/assets/gnome-shell/*', 'dist/gnome-theme/gnome-shell/assets');

    gulp.src(__dirname + '/gnome-shell/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/gnome-theme/gnome-shell/'))
        .pipe(exec('gsettings set org.gnome.desktop.interface gtk-theme "Default" && gsettings set org.gnome.desktop.interface gtk-theme "Ant-Dracula-Purple"'))
        .pipe(exec('gsettings set org.gnome.desktop.wm.preferences theme "Default" && gsettings set org.gnome.desktop.wm.preferences theme "Ant-Dracula-Purple"'))
});

// Watch task
gulp.task('default', ['styles', 'shell-style'], function() {
    gulp.copy(__dirname + '/assets/*', 'dist/gnome-theme/assets');

    // watch files
    gulp.watch('_variables.scss', ['styles', 'shell-style']);

    gulp.watch(__dirname + '/gtk-3.0/**/*.scss', ['styles']);
    gulp.watch(__dirname + '/gtk-3.20/**/*.scss', ['styles']);
    gulp.watch(__dirname + '/gnome-shell/*.scss', ['shell-style']);
});

module.exports = gulp;