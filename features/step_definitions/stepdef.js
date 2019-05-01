const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const textloader = require('../../textloader');
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

    assert.strictEqual(doc["A001"]["Kanna"], "I like to eat!");
    
    return doc;
});

When("id {string}를 매개변수로 loadText 호출하면", (id)=> {
    console.log(textloader)
    loader = textloader.textLoader(doc);
    
    assert(loader);
    console.log(loader);

    json = loader.loadText(id);

    assert(json);
});

Then("{string} json 파일이 생성된다", (fileName)=> {
    exists = fs.existsSync(`json/${fileName}.yaml`);
    
    file = fs.readFileSync(`text/${fileName}.json`, 'utf8');

    assert(exists === true);
    assert.equal(doc, file);
});