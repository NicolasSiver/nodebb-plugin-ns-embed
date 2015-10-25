/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import alt from '../alt';
import ForumApp from 'app';
import objectAssign from 'object-assign';
import Socket from 'socket';
import SocketMethod from './models/socket-method';

class SocketService {
    constructor() {
        this.bindAction(Actions.getAllRules, this.getAllRules);
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