function isInList(field, value, list) {
    let i, listItem;
    let result = false;
    let len = list.length;

    for (i = 0; i < len; ++i) {
        listItem = list[i];

        if (listItem[field] === value) {
            result = true;
            break;
        }
    }

    return result;
}

function payloadToRule(payload) {
    let rule = {};

    // TODO Validation?

    rule.name = payload.name;
    rule.displayName = payload.displayName;
    rule.regex = payload.regex;
    rule.replacement = payload.replacement;
    rule.icon = payload.icon || 'fa-cogs';

    return rule;
}

module.exports = {isInList, payloadToRule};