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
        this.bindAction(Actions.deleteRule, this.deleteRule);
        this.bindAction(Actions.getAllRules, this.getAllRules);
        this.bindAction(Actions.installDefaultRules, this.installDefaultRules);
        this.bindAction(Actions.saveRule, this.saveRule);
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

    deleteRule(rule) {
        Socket.emit(
            SocketMethod.DELETE_RULE,
            rule,
            (error, rule) => {
                if (error) {
                    return ForumApp.alertError(error.message);
                }

                Actions.ruleDidDelete(rule);
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

    installDefaultRules() {
        Socket.emit(
            SocketMethod.INSTALL_DEFAULT_RULES,
            {},
            (error, installedRules) => {
                if (error) {
                    return ForumApp.alertError(error.message);
                }

                ForumApp.alertSuccess('Installed rules: ' + installedRules.join(', '));
                Actions.getAllRules();
            }
        );
    }

    saveRule(rule) {
        Socket.emit(
            SocketMethod.SAVE_RULE,
            rule,
            (error, rule) => {
                if (error) {
                    return ForumApp.alertError(error.message);
                }

                ForumApp.alertSuccess('Rule "' + rule.displayName + '" is updated');
                Actions.ruleDidUpdate(rule);
                Actions.getAllRules();
            }
        );
    }
}

export default alt.createStore(SocketService, 'SocketService');