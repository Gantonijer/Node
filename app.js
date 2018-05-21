var fs= require('fs');
var path=require('path');

var sufix=process.argv[3];
var filterDir=require('./module.js')

filterDir(process.argv[2],sufix,function(err,data){
    if(err)
      return console.log(err)

    data.forEach(function(file){
        console.log(file);
    })

})


