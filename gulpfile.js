var autoprefixer = require('gulp-autoprefixer'),
    browserSync  = require('browser-sync'),
    gulp         = require('gulp'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass');

var reload = browserSync.reload;

gulp.task('browser-sync', function () {
    browserSync({
        proxy    : {
            target: "localhost:4567",
            ws    : true
        },
        startPath: "/admin/plugins/embed"
    });
});

gulp.task('css', function () {
    return gulp.src('./style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 version']}))
        .pipe(rename('acp.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
    gulp.watch('style/**/*.scss', {interval: 1000}, ['css', reload]);
});

gulp.task('default', ['css', 'browser-sync', 'watch']);