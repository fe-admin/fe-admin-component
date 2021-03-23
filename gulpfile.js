const { src, dest, series } = require('gulp')

const babel = require('gulp-babel')

function copyScss() {
  return src('./src/**/*.scss').pipe(dest('lib'))
}

function parseJs() {
  return src(['./src/**/*.js', './src/**/*.jsx'])
    .pipe(
      babel({
        presets: ['@vue/babel-preset-jsx', '@babel/preset-env'],
        plugins: []
      })
    )
    .pipe(dest('lib'))
}

exports.default = series(copyScss, parseJs)
