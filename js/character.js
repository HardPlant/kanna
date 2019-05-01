var character = {
    name: null,
    sprite: null
}

function kanna() {
    baseData = JSON.parse(JSON.stringify(character));
    baseData.name = "kanna";
    baseData.act = 1;

    return baseData;
}