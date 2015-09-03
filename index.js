"use strict";
var gutil = require("gulp-util");
var through = require("through2");
var exec = require("exec");
module.exports = function () {

    function transform(file, encoding, callback) {
        if (file.isStream()) {
            this.emit("error", new gutil.PluginError("gulp-prmd", "Streaming not supported"));
            return callback();
        }
        var thr = this;
        exec(["prmd","combine",file.path], function (err, out) {
            if (err instanceof Error) {
                thr.emit("error", new gutil.PluginError("gulp-prmd", err));
                return callback();
            }
            console.log(file.path);
            file.contents = new Buffer(out);
            file.path = file.path.replace(/\.yml$/, ".json");
            thr.push(file);
            return callback();
        });
    }

    return through.obj(transform);
};