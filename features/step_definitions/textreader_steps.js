const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const fs   = require('fs');
const jsonfile = require('jsonfile');

var scene = {};
scene.load = {};
scene.cache = {};
scene.cache.json = {};

var tr;
var textreaderFn;

Given('TextReader 모듈이 로드되고', function () {
    file = fs.readFileSync("js/textreader.js") + '';
    eval(file);

    assert(typeof(textreader) === "function");
    textreaderFn = textreader;
});

When('아이디 {string}가 부여된다', function (id) {

    tr = textreaderFn(id);
    
    assert(typeof(tr) === "object");
    
    var json = jsonfile.readFileSync("json/" + id + ".json");
    
    scene.load.json = function() {
        return json;
    };
    scene.cache.json.get = function() {
        return json;
    };

    tr.preload.call(scene);
});

When('텍스트 로드를 수행하면', function () {
    tr.create.call(scene);
    var dialog = tr.getCurrentDialog();
    console.log(dialog);

    assert(typeof(dialog) !== "undefined");
    assert(typeof(dialog.Image) !== "undefined");
    assert(typeof(dialog.Name) !== "undefined");
    assert(typeof(dialog.Dialog) !== "undefined");
});

Then('{string}번 텍스트가 로드된다', function (seq) {
    assert(tr.getSequence() == Number.parseInt(seq));
});

Then('다음 텍스트를 로드하면', function () {
    tr.getNextDialog();
});