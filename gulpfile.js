var gulp = require('gulp');
livereload = require('gulp-livereload');


/*-----------------------------------------------*/
/*----------- 1. START GULP  -------------------*/
/*-----------------------------------------------*/

/*gulp.task('series', gulp.series(Style,Style_Quiz,Style_Admin,
                                Ang,Main_js,Ang_Quiz,
                                Reload3000));*/
gulp.task('default', gulp.parallel(watch));

/* Default gulp */
// gulp.task('default',gulp.parallel(watch, 'series' ));

/*-----------------------------------------------*/
/*----------- 2. WATCH FUNCTION  -------------------*/
/*-----------------------------------------------*/

function watch(done){

    livereload.listen();
    /* + Reload */

    // gulp.watch('resources/views/**/*.blade.php',Php);
    gulp.watch('public/js/app.js',Php);

    done();
}


/*-----------------------------------------------*/
/*----------- 3. RELOAD PAGE  -------------------*/
/*-----------------------------------------------*/

function Php(done){

    livereload.reload();

    done();
}
