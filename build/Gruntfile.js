/// <reference path="typings/imports.d.ts" />
/*
* Prototyped Grunt file for a task based javascript builder
*/
module.exports = function (grunt) {
    'use strict';

    // Load required tasks
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define the task(s)
    grunt.registerTask('default', [
        'build',
    ]);
    grunt.registerTask('build', [
        'build-scripts',
    ]);
    grunt.registerTask('build-scripts', [
        'typescript',
    ]);

    // Configure grunt
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env,
        cfg: {
            base: '../src/',
            dest: '../dist/',
        },
        typescript: {
            options: {
                sourceMap: false,
                declaration: true,
                target: 'es5', //or es3 
                //module: 'commonjs', //or amd 
            },
            targets: {
                src: '<%= cfg.base %>modules/string/StringPrototyped.ts',
                dest: '<%= cfg.dest %>/StringPrototyped.js',
            }
        },
        watch: {
            ts: {
                tasks: ['typescript'],
                files: [
                    '<%= cfg.base %>**/*.ts'
                ],
            },
        },
    };

    grunt.initConfig(config)
};