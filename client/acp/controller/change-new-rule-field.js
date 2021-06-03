import {setNewRule} from './actions';
import {getSanitizedName} from '../util/get-sanitized-name';
import {getNewRule} from '../model/selectors';

export function changeNewRuleField(field, value, store) {
    let rule = {...getNewRule(store.getState())};

    rule[field] = field === 'name' ? getSanitizedName(value) : value;

    store.dispatch(setNewRule(rule));
}
