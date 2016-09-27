var fileModel = function() {
    const fs = require('fs');
    this.get = function(modelName, modelId) {
        console.log(__dirname);
        var data = JSON.parse(fs.readFileSync(__dirname+'/'+modelName+'.json', 'utf8'));
        //console.log(data);
        for (d in data) {
            console.log(data[d]);
            if (data[d]._id==modelId) {
                return data[d];
            }
        }
        /*data.forEach(function(index, value) {
            if (value._id==modelId) {
                return value;
            }
        });*/

    };

    this.getAll = function(modelName) {
        return JSON.parse(fs.readFileSync(__dirname+'/'+modelName+'.json', 'utf8'));
    }

}

module.exports = new fileModel();