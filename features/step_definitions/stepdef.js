const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const textloader = require('../../js/textloader');
const yaml = require('js-yaml');
const fs   = require('fs');
const path = require('path');
/*
Given("()", ()=>{

});
When("", ()=>{

});
Then("", ()=>{

});
*/
var doc;
var fileName;
Given("{string} 텍스트 파일이 주어진다", function (fileName) {

    assert(fs.existsSync(`text/${fileName}.yaml`));
    assert(yaml);

    file = fs.readFileSync(`text/${fileName}.yaml`, 'utf8');
    
    assert(file);

    doc = yaml.load(file);
    fileName = fileName;
    
    return doc;
});

When("id {string}를 매개변수로 loadText 호출하면", (id)=> {
    try{
        fs.unlinkSync(`json/${id}.json`);
    } catch (e) {
    }

    loader = textloader.textLoader(doc);
    
    assert(loader);

    json = loader.loadText(id);

    assert(json);
});

Then("{string} json 파일이 생성된다", (fileName)=> {
    exists = fs.existsSync(`json/${fileName}.json`);
    
    file = fs.readFileSync(`json/${fileName}.json`, 'utf8');

    assert(exists === true);
    assert.deepEqual(doc[fileName], JSON.parse(file));
});