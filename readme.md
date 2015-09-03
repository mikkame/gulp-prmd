#gulp-prmd

prmd for gulp-pulgin

Maybe you can do the same thing even gulp-exec

However, to write concise and task file and I tried to plug-in also serves as a practice



#Usage

```
#Example

gulp.task('prmd', function () {
  return gulp.src("./doc/schema/**/*.yml")
    .pipe(prmd())
    .pipe(gulp.dest("./doc/api/"))
  });

```


#License

MIT