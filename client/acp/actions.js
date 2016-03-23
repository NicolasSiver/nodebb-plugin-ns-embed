/**
 * Created by Nicolas on 10/21/15.
 */
import alt from './alt';

class Actions {

    createNewRule() {
        return null;
    }

    deleteRule(rule) {
        return rule;
    }

    getAllRules() {
        return null;
    }

    installDefaultRules() {
        return null;
    }

    newRuleFieldDidUpdate(field, value) {
        return {field, value};
    }

    resetNewRule() {
        return null;
    }

    ruleDidCreate() {
        return null;
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

    updateRule(rule, field, value) {
        return {rule, field, value};
    }
}

export default alt.createActions(Actions);