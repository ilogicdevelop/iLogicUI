var gulp = require('gulp');
var connect = require('gulp-connect');
var gwatch = require('gulp-watch');
var sh = require('shelljs');
var amdOptimize = require("amd-optimize");  
var concat = require('gulp-concat'); 
var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var fs = require("fs");

var paths = {
    htmlpunit:['./*.html','./punit/**/*.html'],
    csspath:['./css/**/*.css'],
    jspath:['./src/**/*.js']
};

gulp.task('connect', function () {
    connect.server({
        root: '.',
        livereload: true,
        port:'7202'
    });
});

gulp.task('watch', function() {
    gwatch(paths.htmlpunit,function(file){
      watchcl(file);
      gulp.start("html");
    });
    gwatch(paths.csspath,function(file){
        watchcl(file);
        gulp.start("css");
    });
    gwatch(paths.jspath,function(file){
        watchcl(file);
        gulp.start("js");
    });
});

function watchcl(file){
    console.log(file.path + ' ' + file.event);
    // preSvnProcess(file);
}

var preSvnProcess= function(fileevent){
    if(fileevent.event=="add"){
        sh.exec('svn add '+fileevent.path);
    }else if(fileevent.event=="deleted"){
        sh.exec('svn delete '+fileevent.path);
    }
    sh.exec('svn commit -m "'+fileevent.path+' commit"');
}

gulp.task('html', function(done) {
    gulp.src(paths.htmlpunit)
      .pipe(connect.reload())
      .on('end', done);
});

gulp.task('css', function(done) {
    gulp.src(paths.csspath)
      .pipe(connect.reload())
      .on('end', done);
});

gulp.task('js', function(done) {
    // gulp.src(paths.jspath)
    //   .pipe(amdOptimize("./src/components"))
    //   .pipe(concat("components.js"))        
    //   .pipe(gulp.dest("js"))
    //   .pipe(connect.reload())
    //   .on('end', done);

    browserify('./src/components.js')
    // // .transform(vueify)
    .bundle()
    .pipe(fs.createWriteStream("js/components.js"));

    // var b = browserify({
    //     entries: "./src/components.js",
    //     debug: true
    // });
    // return b.bundle()
    //     .pipe(source("./src.components.js"))
    //     .pipe(buffer())
    //     .pipe(sourcemaps.init({loadMaps: true}))
    //     .pipe(sourcemaps.write("."))
    //     .pipe(gulp.dest("./js"));

});

gulp.task('link', function() {
    if(gulp.env.ui){     
      sh.exec('rm css/style.css');
      sh.exec('ln css/style.'+gulp.env.ui+'.css css/style.css');
      sh.exec('rm src/components.js');
      sh.exec('ln src/components.'+gulp.env.ui+'.js src/components.js');      
    }
    else{
      console.log("use --ui=xxx to set ui name")
    }
});

gulp.task('default', ['link','js','connect','watch']);

