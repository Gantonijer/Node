const fs=require('fs');
const path=require('path');

module.exports =function(dirname,extension,callback){
    fs.readdir(dirname,function(err,data){
        if(err)
            return callback(err)
        data =data.filter(function(file){
            return path.extname(file) === '.'+extension;
        })
    callback(null,data);
    })
}


