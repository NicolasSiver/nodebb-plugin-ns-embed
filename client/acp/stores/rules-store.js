/**
 * Created by Nicolas on 10/21/15.
 */
import alt from '../alt';

class RulesStore {
    constructor() {
        this.bindListeners({});

        this.state = {
            rules: []
        };
    }
}

export default alt.createStore(RulesStore, 'RulesStore');