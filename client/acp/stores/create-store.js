/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import alt from '../alt';
import objectAssign from 'object-assign';

class CreateStore {
    constructor() {
        this.removeSpecialChars = /[^\w]/gi;
        this.initState = {
            name       : '',
            displayName: '',
            regex      : '',
            replacement: '',
            valid      : false
        };

        this.bindAction(Actions.newRuleFieldDidUpdate, this.update);
        this.bindAction(Actions.resetNewRule, this.reset);
        this.bindAction(Actions.ruleDidCreate, this.reset);


        this.state = objectAssign({}, this.initState);
    }

    isValid(...fields) {
        for (let field of fields) {
            if (field === null || typeof field === 'string' && field.length == 0) {
                return false;
            }
        }

        return true;
    }

    reset() {
        this.setState(this.initState);
    }

    sanitizeName(field, value) {
        if (field === 'name' && value != null) {
            value = value.toLowerCase();
            value = value.replace(this.removeSpecialChars, '');
            return value;
        }

        return value;
    }

    update(data) {
        let value = this.sanitizeName(data.field, data.value);
        let update = {[data.field]: value};
        let state = objectAssign(this.state, update);

        state.valid = this.isValid(state.name, state.displayName, state.regex, state.replacement);
        this.setState(state);
    }
}

export default alt.createStore(CreateStore, 'CreateStore');