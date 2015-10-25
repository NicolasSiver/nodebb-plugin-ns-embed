/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import alt from '../alt';


class CreateStore {
    constructor() {
        this.bindAction(Actions.updateNewRule, this.update);

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
        this.setState({
            name       : data.name,
            displayName: data.displayName,
            regex      : data.regex,
            replacement: data.replacement,
            valid      : this.isValid(data.name, data.displayName, data.regex, data.replacement)
        });
    }
}

export default alt.createStore(CreateStore, 'CreateStore');