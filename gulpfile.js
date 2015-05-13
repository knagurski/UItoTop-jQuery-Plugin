var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    uglify    = require('gulp-uglify'),
    uglifyCss = require('gulp-uglifycss'),
    rename    = require('gulp-rename'),
    bower     = require('gulp-bower'),
    imagemin  = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('src/sass/ui.totop.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(uglifyCss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
  return gulp.src('src/js/jquery.ui.totop.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function () {
  var imgSrc = [
    'src/img/**/*.jpg',
    'src/img/**/*.png',
    'src/img/**/*.gif',
    'src/img/**/*.svg'
  ];

  return gulp.src(imgSrc)
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('bower', function () {
  return bower();
});

gulp.task('install', ['bower']);
gulp.task('default', ['sass', 'js', 'images']);