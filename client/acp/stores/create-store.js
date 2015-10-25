/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import alt from '../alt';
import objectAssign from 'object-assign';

class CreateStore {
    constructor() {
        this.bindAction(Actions.newRuleFieldDidUpdate, this.update);

        this.state = {
            name       : null,
            displayName: null,
            regex      : null,
            replacement: null,
            valid      : false
        };
    }

    isValid(...fields) {
        for (let field of fields) {
            if (field === null || typeof field === 'string' && field.length == 0) {
                return false;
            }
        }

        return true;
    }

    update(data) {
        var update = {[data.field]: data.value};
        let state = objectAssign(this.state, update);
        state.valid = this.isValid(state.name, state.displayName, state.regex, state.replacement);
        this.setState(state);
    }
}

export default alt.createStore(CreateStore, 'CreateStore');