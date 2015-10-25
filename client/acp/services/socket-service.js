/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import alt from '../alt';
import CreateStore from '../stores/create-store';
import ForumApp from 'app';
import objectAssign from 'object-assign';
import Socket from 'socket';
import SocketMethod from '../models/socket-method';

class SocketService {
    constructor() {
        this.bindAction(Actions.createNewRule, this.createNewRule);
        this.bindAction(Actions.getAllRules, this.getAllRules);
    }

    createNewRule() {
        Socket.emit(
            SocketMethod.CREATE_RULE,
            CreateStore.getState(),
            (error, rule) => {
                if (error) {
                    return ForumApp.alertError(error.message);
                }

                Actions.ruleDidCreate();
                Actions.getAllRules();
            }
        );
    }

    getAllRules() {
        Socket.emit(
            SocketMethod.GET_ALL_RULES,
            {},
            (error, rules) => {
                if (error) {
                    return ForumApp.alertError(error.message);
                }

                Actions.rulesDidUpdate(rules);
            }
        );
    }

}

export default alt.createStore(SocketService, 'SocketService');