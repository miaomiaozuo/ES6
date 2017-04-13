var gulp=require("gulp");
var sass=require("gulp-sass");
var browserSync=require("browser-sync").create();
var reload=browserSync.reload;

gulp.task("server",["csses"],function(){
	browserSync.init({
		server:{
			baseDir:"./",
			startPath:"index.html"
		}
	})
	gulp.watch("css/use/*.scss",["csses"]);
	gulp.watch("js/index.js").on("change",reload)
	gulp.watch("./*.html").on("change",reload)

})
gulp.task("csses",function(){
	gulp.src("css/use/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("./css/use/"))
		.pipe(reload({stream:true}))
})