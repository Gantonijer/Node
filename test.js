var fs= require('fs');
var path=require('path');
var sufix='.'+ process.argv[3];
var temp;

fs.readdir(process.argv[2],function(err,list){
    if(!err){
        list.forEach(function(file){
            if(path.extname(file)===sufix)
                console.log(file);
        })
        
        
    }
    else
    console.log(err);
});


