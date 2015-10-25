/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import alt from '../alt';


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
        for (let rule of rules) {
            if (rule.rid === id) {
                return rule;
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
        let rule = this.gerRuleById(payload.rule.rid, rules);
        rule[payload.field] = payload.value;
        this.setState({
            rules: rules
        });
    }
}

export default alt.createStore(RulesStore, 'RulesStore');