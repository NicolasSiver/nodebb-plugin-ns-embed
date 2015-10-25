/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import alt from '../alt';


class RulesStore {
    constructor() {
        this.bindAction(Actions.getAllRules, this.getRules);
        this.bindAction(Actions.rulesDidUpdate, this.rulesDidUpdate);

        this.state = {
            rules       : [
                {displayName: 'Youtube', name: 'youtube', icon: 'fa-youtube'},
                {displayName: 'Vimeo', name: 'vimeo', icon: 'fa-vimeo'},
                {displayName: 'Twitch', name: 'twitch', icon: 'fa-twitch'}
            ],
            selectedRule: null
        };
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
}

export default alt.createStore(RulesStore, 'RulesStore');