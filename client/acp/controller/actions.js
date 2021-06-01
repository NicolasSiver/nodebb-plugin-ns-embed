import * as ActionTypes from '../model/action-types';

export function setRules(rules) {
    return {
        type   : ActionTypes.RULES_DID_CHANGE,
        payload: rules
    };
}
