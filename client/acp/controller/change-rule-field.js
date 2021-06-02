import {setRules} from './actions';
import {getRules} from '../model/selectors';

export function changeRuleField(ruleSelected, field, value, store) {
    let rules = getRules(store.getState()).slice();
    let editRule = rules.find(rule => rule.rid === ruleSelected.rid);

    editRule[field] = value;

    store.dispatch(setRules(rules));
}
