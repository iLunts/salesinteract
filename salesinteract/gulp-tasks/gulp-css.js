/// <binding AfterBuild='scripts' />
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var minify = require('gulp-minify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
const webp = require('gulp-webp');


// ---------------------------------------
// ---------------------------------------
// Less
// ---------------------------------------
// ---------------------------------------

gulp.task('css.admin', function () {
    gulp.src(['web-src/less/admin.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('admin.min.css'))
        .pipe(clean({
            force: true
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('css.dash', function () {
    gulp.src(['web-src/less/dash.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('dash.min.css'))
        .pipe(clean({
            force: true
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/assets/css/'));
});

gulp.task('css.site', function () {
    gulp.src(['web-src/less/site.less'])
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(concat('site.min.css'))
        .pipe(clean({
            force: true
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/assets/css/'));
});


gulp.task('image.webp', function () {
  gulp.src(['src/assets/img/**/*.*'])
    .pipe(webp())
    .pipe(gulp.dest('src/assets/webp'));
});
