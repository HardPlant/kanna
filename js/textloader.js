const jsonfile = require('jsonfile');

textLoader = {
    context: undefined,

    textLoader : function(file) {
        context = file;
    
        return this;
    },
    loadText : function(id) {
        jsonfile.writeFile(`json/${id}.json`, context[id]);

        return context[id];
    }
}

module.exports = textLoader;