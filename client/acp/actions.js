/**
 * Created by Nicolas on 10/21/15.
 */
import alt from './alt';
import ForumApp from 'app';
import Socket from 'socket';
import SocketMethod from './models/socket-method';

class Actions {

    createNewRule(){
        this.dispatch();
    }

    getAllRules() {
        this.dispatch();
    }

    newRuleFieldDidUpdate(field, value){
        return {field, value};
    }

    rulesDidUpdate(rules) {
        return rules;
    }

    selectRule(rule) {
        return rule;
    }

    resetNewRule(){
        this.dispatch();
    }

    updateNewRule(name, displayName, regex, replacement, dirtyField) {
        return {name, displayName, regex, replacement, dirtyField};
    }
}

export default alt.createActions(Actions);