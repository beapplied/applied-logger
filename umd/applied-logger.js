!function(r){"function"==typeof define&&define.amd?define(r):r()}(function(){"use strict";const r=require("chalk"),o=require("sql-formatter"),e=require("./utils");exports.error=(...r)=>{e.checkForSpecifiError(r)?e.printer("error",e.constuctError(r[0],r[1])):r.forEach(r=>{e.printer("error",r)})},exports.warn=(...r)=>{e.checkForSpecifiError(r)?e.printer("warn",e.constuctError(r[0],r[1])):r.forEach(r=>{e.printer("warn",r)})},exports.info=(...r)=>{e.checkForSpecifiError(r)?e.printer("info",e.constuctError(r[0],r[1])):r.forEach(r=>{e.printer("info",r)})},exports.log=(...r)=>{e.checkForSpecifiError(r)?e.printer("log",e.constuctError(r[0],r[1])):r.forEach(r=>{e.printer("log",r)})},exports.debug=(...r)=>{e.checkForSpecifiError(r)?e.printer("debug",e.constuctError(r[0],r[1])):r.forEach(r=>{e.printer("debug",r)})},exports.sql=(...e)=>{e.forEach(e=>{console.log(r.grey(`[SQLIZE] ${o.format(e)}`))})}});
