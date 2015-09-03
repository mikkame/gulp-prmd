var gulp = require('gulp');
var prmd = require('../index.js');
var should = require('should');
var through = require("through2");
var fs = require("fs");
var assert = require('stream-assert-gulp');
describe("gulp-prmd",function(){
    return describe("prmd",function() {
        it("transform",function(done) {
            return gulp.src(__dirname+"/before.yml")
                .pipe(prmd())
                .pipe(assert.first(
                    function(file){
                         should.equal(fs.readFileSync(__dirname+"/after.json")+"",file.contents+"");
                    }
                )).on('end', done);
                
        })
    })
})