/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import alt from '../alt';


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
        for(let field of fields){
            if(typeof field === 'string' && field.length == 0){
                return false;
            }
        }

        return true;
    }

    update(data) {
        let update = {};
        update[data.field] = data.value;
        update.valid = this.isValid(data.value);
        this.setState(update);
    }
}

export default alt.createStore(CreateStore, 'CreateStore');