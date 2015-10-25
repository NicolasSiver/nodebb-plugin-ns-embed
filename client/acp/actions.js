/**
 * Created by Nicolas on 10/21/15.
 */
import alt from './alt';
import ForumApp from 'app';
import Socket from 'socket';
import SocketMethod from './models/socket-method';

class Actions {

    rulesDidUpdate(rules) {
        return rules;
    }

    getAllRules() {
        this.dispatch();
        Socket.emit(
            SocketMethod.GET_ALL_RULES,
            {},
            (error, rules) => {
                if (error) {
                    return ForumApp.alertError(error.message);
                }

                this.actions.rulesDidUpdate(rules);
            }
        );
    }

    selectRule(rule) {
        return rule;
    }

    updateNewRule(name, displayName, regex, replacement, dirtyField) {
        return {name, displayName, regex, replacement, dirtyField};
    }
}

export default alt.createActions(Actions);