/**
 * Created by Nicolas on 10/21/15.
 */
import alt from '../alt';

class RulesStore {
    constructor() {
        this.bindListeners({});

        this.state = {
            rules: [
                {displayName: 'Youtube', name: 'youtube', icon: 'fa-youtube'},
                {displayName: 'Vimeo', name: 'vimeo', icon: 'fa-vimeo'},
                {displayName: 'Twitch', name: 'twitch', icon: 'fa-twitch'}
            ]
        };
    }
}

export default alt.createStore(RulesStore, 'RulesStore');