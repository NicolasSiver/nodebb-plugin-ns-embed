import * as ActionTypes from './action-types';

export function newRule(state, action) {
    switch (action.type) {
        case ActionTypes.NEW_RULE_DID_CHANGE:
            return action.payload;
        default:
            return state;
    }
}

export function rules(state, action) {
    switch (action.type) {
        case ActionTypes.RULES_DID_CHANGE:
            return action.payload;
        default:
            return state;
    }
}

export function selectedRule(state, action) {
    switch (action.type) {
        case ActionTypes.SELECTED_RULE_DID_CHANGE:
            return action.payload;
        default:
            return state;
    }
}
