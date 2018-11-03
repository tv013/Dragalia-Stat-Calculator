var henlo = function() {
    console.log("henlo");
}

var parseHPBoostFromSkill = function (ability) {
    return parseAbilityName(ability.Name, "HP");
}
var parseSTRBoostFromSkill = function (ability) {
    return parseAbilityName(ability.Name, "Strength");
}

var parseAbilityName = function (name, stat) {
    var parsedStat = name.match(/\d+/g);
    if (name.includes(stat) && parsedStat != null) {
        return parseInt(parsedStat);
    }
    return 0;
}