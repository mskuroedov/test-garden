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
    commonjs = require('rollup-plugin-commonjs'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    ghPages = require('gulp-gh-pages'),
    destFolder = require('path').basename(__dirname);

function browsersync() {
    browserSync.init({
        server: {baseDir: `${destFolder}/`},
        notify: false,
        online: true
    })
}

function startwatch() {
    watch('src/js/**/*.js', scripts);
    watch('src/scss/**/*.scss', styles);
    watch('src/images/**/*', images);
    watch('src/**/*.html', html);
}

function cleanDist() {
    return del(`${destFolder}`)
}

function html() {
    return src('src/**/*.html')
        .pipe(dest(`${destFolder}`))
        .pipe(browserSync.stream())
}

function scripts() {
    return src('src/js/app.js')
        .pipe(rollup({plugins: [babel(), resolve(), commonjs()]}, 'umd'))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest(`${destFolder}/js/`))
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
        .pipe(dest(`${destFolder}/css/`))
        .pipe(browserSync.stream())
}

function images() {
    return src('src/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true,
            optimization: 3 // 0-7
        }))
        .pipe(dest(`${destFolder}/images/`))
        .pipe(browserSync.stream())
}

function build() {
    return series(images, parallel(html, scripts, styles), parallel(browsersync, startwatch))
}

function deploy() {
    return src(`${destFolder}/**/*`).pipe(ghPages());
}

exports.browsersync = browsersync;
exports.html = html;
exports.scripts = scripts;
exports.styles = styles;
exports.images = images;
exports.build = build;
exports.deploy = series(cleanDist, build, deploy);
exports.dev = series(cleanDist, parallel(images, html, scripts, styles), parallel(browsersync, startwatch));
exports.default = series(cleanDist, parallel(html, styles, scripts, images));