/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import alt from '../alt';
import objectAssign from 'object-assign';

class RulesStore {
    constructor() {
        this.bindAction(Actions.ruleDidDelete, this.ruleDidDelete);
        this.bindAction(Actions.rulesDidUpdate, this.rulesDidUpdate);
        this.bindAction(Actions.selectRule, this.ruleDidSelect);
        this.bindAction(Actions.updateRule, this.ruleShouldUpdate);

        this.state = {
            rules       : [],
            selectedRule: null
        };
    }

    gerRuleById(id, rules) {
        let i = 0, len = rules.length, rule;

        for (i; i < len; ++i) {
            rule = rules[i];

            if (rule.rid === id) {
                return {index: i, rule: objectAssign({}, rule)};
            }
        }

        return null;
    }

    ruleDidDelete(rule) {
        if (this.state.selectedRule && this.state.selectedRule.name === rule.name) {
            this.setState({
                selectedRule: null
            });
        }
    }

    ruleDidSelect(rule) {
        this.setState({
            selectedRule: rule
        });
    }

    rulesDidUpdate(rules) {
        this.setState({
            rules: rules
        })
    }

    ruleShouldUpdate(payload) {
        let rules = this.state.rules.slice();
        let searchResult = this.gerRuleById(payload.rule.rid, rules);
        let rule = searchResult.rule;
        let update = {};

        rule[payload.field] = payload.value;
        rules[searchResult.index] = rule;

        update.rules = rules;

        // Update selection if needed
        if (this.state.selectedRule && this.state.selectedRule.rid === rule.rid) {
            update.selectedRule = rule;
        }

        this.setState(update);
    }
}

export default alt.createStore(RulesStore, 'RulesStore');