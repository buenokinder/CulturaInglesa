var gulp = require('gulp');
var rename = require('gulp-rename');
var less = require('gulp-less');
var autoPrefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');
var concat = require('gulp-concat');

var bower = require('gulp-bower');

var typescript = require('gulp-typescript');
var tsProject = typescript.createProject("tsconfig.json");

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

const PATHS = {
    less: {
        src: ['src/css/app.less'],
        watchPath: ['src/css/**/*.less'],
        dest: 'www/css'
    },
    ts: {
        src: ['src/app/**/*.ts'],
        dest: 'www',
        filename: 'main.js'
    },
    index: {
        src: [
            'src/index.html',
            'src/indexApp.html'
        ],
        dest: 'www'
    },
    templates: {
        src: [
            'src/app/templates/**/*',
            'src/app/views/**/*',
            'src/app/widget/**/*',
            'src/app/directives/**/*.html'
        ],
        dest: 'www/app'
    },
    img: {
        src: ['src/images/**',
            'src/img/**/*',
            'src/css/**/*+(png|jpg|ico)'
        ],
        dest: 'www'
    },
    pure_css: {
        src: ['src/css/*.css'],
        dest: 'www/css'
    },
    static: {
        src: [
            'src/*+(png|jpg|ico)',
            'src/config/*',
            'src/fonts/**/*',
            'src/js/**/*',
            'src/Scripts/**/*.js',
            'src/css/vendor/*'
        ],
        dest: 'www'
    }
}

gulp.task('typescript', function () {
    tsProject.src()
        .pipe(tsProject()).js
        .pipe(concat(PATHS.ts.filename))
        .pipe(gulp.dest(PATHS.ts.dest))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(PATHS.ts.dest))
    // .pipe(reload())
});

gulp.task('less', function () {
    gulp.src(PATHS.less.src)
        .pipe(less())
        .pipe(autoPrefixer())
        .pipe(gulp.dest(PATHS.less.dest))
    // .pipe(rename({
    //     suffix: '.min'
    // }))
    // .pipe(cleanCss())
    // .pipe(gulp.dest('www/css'))
    // .pipe(reload())
});

gulp.task('pure_css', function () {
    gulp.src(PATHS.pure_css.src)
        .pipe(autoPrefixer())
        .pipe(gulp.dest(PATHS.pure_css.dest))
});

gulp.task('index', function () {
    gulp.src(PATHS.index.src)
        .pipe(gulp.dest(PATHS.index.dest))
    // .pipe(reload())
});

gulp.task('templates', function () {
    gulp.src(PATHS.templates.src, {
            base: 'src/app'
        })
        .pipe(gulp.dest(PATHS.templates.dest))
    // .pipe(reload())
});

gulp.task('img', function () {
    gulp.src(PATHS.img.src, {
            base: 'src'
        })
        .pipe(cache(imageMin()))
        .pipe(gulp.dest(PATHS.img.dest))
    // .pipe(reload())
    // .pipe(notify('image task finished'))
});

gulp.task('static', function () {
    gulp.src(PATHS.static.src, {
            base: 'src'
        })
        .pipe(gulp.dest(PATHS.static.dest))

    // .pipe(reload())
    // .pipe(notify('static task finished'))
});

gulp.task('bower', function () {
    return bower();
})

gulp.task('reload', function () {
    return reload();
})

gulp.task('build:dev', ['index', 'templates', 'typescript', 'less', 'pure_css', 'img', 'static'])



gulp.task('serve', function () {
    browserSync.init({
        server: "./www",
        open: false
    });
    gulp.watch(PATHS.ts.src, ['typescript']);
    gulp.watch(PATHS.less.watchPath, ['less']);
    gulp.watch(PATHS.index.src, ['index']);
    gulp.watch(PATHS.templates.src, ['templates']);
    gulp.watch(PATHS.img.src, ['img']);
    gulp.watch(PATHS.pure_css.src, ['pure_css']);
    gulp.watch(PATHS.index.src, ['index']);
    // gulp.watch(PATHS.static.src, ['static']);
});

gulp.task('default', ['build:dev', 'serve'])