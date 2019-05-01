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

        return doc;
    } catch (e) {

    }
});

When("loadText를 호출하면", ()=> {
    textloader.loadText()
});