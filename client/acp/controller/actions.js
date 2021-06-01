import * as ActionTypes from '../model/action-types';

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
