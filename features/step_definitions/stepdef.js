const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const textloader = require('./textloader.js');
const yaml = require('js-yaml');
const fs   = require('fs');
/*
Given("()", ()=>{

});
When("", ()=>{

});
Then("", ()=>{

});
*/
var doc;

Given("{string} 텍스트 파일이 주어진다", (fileName, option)=> {
    try {
        doc = yaml.safeLoad(fs.readFileSync(`text/${fileName}.yaml`, 'utf8'));

        assert(typeof(doc) !== "undefined");

    } catch (e) {

    }
});

When("id: {string}를 매개변수로 loadText 호출하면", (id)=> {
    json = textloader.loadText(doc, id);

    assert(typeof(json) !== "undefined");
});

Then("json 파일이 생성된다", ()=> {
    exists = os.path

    assert(exists === true);
});