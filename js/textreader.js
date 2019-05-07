function textreader(id) {
    var context;
    var sequence = 0;
    console.log("TextReader loaded with:" + id);

    return {
        preload: function() {
            this.load.json("DialogData" + id, "json/" + id + ".json");
        },
        create: function() {
            context = this.cache.json.get("DialogData" + id);
        },
        getNextDialog : function() {
            return context[sequence++];
        },
        getCurrentDialog : function() {
            return context[sequence];
        },
        isNextDialogPresent : function() {
            if (context[sequence]) return true;
            else return false;
        },
        getSequence: function() {
            return sequence;
        }
    };
}