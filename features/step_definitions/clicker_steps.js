const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const fs = require('fs');

var character;
var clickerFn;
var clicker;
var kannaData;

var beforeStat;
var afterStat;

Given('카나 캐릭터가 주어진다', function () {
    character = fs.readFileSync("js/character.js") + '';

    eval(character);

    assert(typeof (kanna) === "function");

    kannaData = kanna();
    assert.equal(kannaData["name"], "kanna");
    assert.equal(kannaData["act", 1]);
});


Given('클리커가 주어진다', function () {
    clickerFn = fs.readFileSync("js/clicker.js") + '';

    eval(clickerFn);
    clickerFn = clicker;
    assert(clickerFn);

    assert(typeof (clickerFn) === "object");
});


When('클리커에 카나 캐릭터를 적용하고', function () {
    assert(kannaData["act"]);

    clicker = clickerFn.clicker(kannaData, "act", 1, 3);
    assert(clicker);

    assert.equal(clicker.character, kannaData);
});


When('카나 캐릭터를 클릭하면', function () {
    beforeStat = clicker.getCurrentStat();

    clicker.click();
});

When('3프레임이 지나면', function () {
    beforeStat = clicker.getCurrentStat();

    clicker.update();
    clicker.update();
    clicker.update();
});

Then('연기력 스탯이 클릭 델타만큼 상승한다', function () {
    afterStat = clicker.getCurrentStat();

    assert.equal((beforeStat + clicker.clickDelta), afterStat);
});


Then('연기력 스탯이 3델타만큼 상승한다', function () {
    afterStat = clicker.getCurrentStat();

    assert.equal((beforeStat + clicker.delta * 3), afterStat);
});

Given('클리커 스테이지를 {string} 스테이지로 설정한다', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('{string}분 후에', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('{string}스테이지의 부스트가 출현한다', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});