/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import alt from '../alt';

class RulesStore {
    constructor() {
        this.bindAction(Actions.selectRule, this.ruleDidSelect);

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
}

export default alt.createStore(RulesStore, 'RulesStore');