/**
 * Created by Nicolas on 10/21/15.
 */
import alt from './alt';
import ForumApp from 'app';
import Socket from 'socket';
import SocketMethod from './models/socket-method';

class Actions {

    createNewRule() {
        this.dispatch();
    }

    deleteRule(rule) {
        return rule;
    }

    getAllRules() {
        this.dispatch();
    }

    newRuleFieldDidUpdate(field, value) {
        return {field, value};
    }

    resetNewRule() {
        this.dispatch();
    }

    ruleDidCreate() {
        this.dispatch();
    }

    ruleDidDelete(rule) {
        return rule;
    }

    ruleDidUpdate(rule) {
        return rule;
    }

    rulesDidUpdate(rules) {
        return rules;
    }

    saveRule(rule) {
        return rule;
    }

    selectRule(rule) {
        return rule;
    }

    updateNewRule(name, displayName, regex, replacement, dirtyField) {
        return {name, displayName, regex, replacement, dirtyField};
    }
}

export default alt.createActions(Actions);