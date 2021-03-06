import * as ActionTypes from '../model/action-types';

export function setNewRule(rule) {
    return {
        type   : ActionTypes.NEW_RULE_DID_CHANGE,
        payload: rule
    };
}

export function setRules(rules) {
    return {
        type   : ActionTypes.RULES_DID_CHANGE,
        payload: rules
    };
}

export function setSelectedRule(rule) {
    return {
        type   : ActionTypes.SELECTED_RULE_DID_CHANGE,
        payload: rule
    };
}
