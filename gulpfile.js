const {src, dest, parallel, series, watch} = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify-es').default,
    rollup = require('gulp-better-rollup'),
    babel = require('rollup-plugin-babel'),
    resolve = require('rollup-plugin-node-resolve'),
    commonjs = require('rollup-plugin-commonjs');

function browsersync() {
    browserSync.init({
        server: {baseDir: 'app/'},
        notify: false,
        online: true
    })
}

function scripts() {
    return src('src/js/app.js')
        .pipe(rollup({plugins: [babel(), resolve(), commonjs()]}, 'umd'))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js/'))
        .pipe(browserSync.stream())
}

function styles() {
    return src('src/scss/**/*.scss')
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
        .pipe(cleancss({level: {1: {specialComments: 0}}/* , format: 'beautify' */}))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(dest('app/css/'))
        .pipe(browserSync.stream())
}

function startwatch() {
    watch(['src/**/*.js', '!src/**/*.min.js'], scripts);
    watch('src/scss/**/*.scss', styles);
    watch('app/**/*.html').on('change', browserSync.reload);
}

function cleandist() {
}

function images() {
}

function buildcopy() {
}


exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.default = series(scripts, styles, parallel(browsersync, startwatch));
exports.build = series(cleandist, styles, scripts, images, buildcopy);