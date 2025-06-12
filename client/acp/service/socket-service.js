import {setNewRule, setRules, setSelectedRule} from '../controller/actions';
import * as SocketMethods from '../model/socket-methods';

export class SocketService {
    constructor(store, alerts) {
        this.store = store;
        this.alerts = alerts;
    }

    createNewRule(rule) {
        window.socket.emit(
            SocketMethods.CREATE_RULE,
            rule,
            (error, rule) => {
                if (error) {
                    return this.alerts.error(error.message);
                }

                this.alerts.success('Rule "' + rule.displayName + '" has been created');
                this.store.dispatch(setNewRule({}));
                this.getAllRules();
            }
        );
    }

    deleteRule(rule) {
        window.socket.emit(
            SocketMethods.DELETE_RULE,
            rule,
            (error, rule) => {
                if (error) {
                    return this.alerts.error(error.message);
                }

                this.alerts.success('Rule "' + rule.displayName + '" is deleted');
                this.store.dispatch(setSelectedRule(null));
                this.getAllRules();
            }
        );
    }

    getAllRules() {
        window.socket.emit(
            SocketMethods.GET_ALL_RULES,
            {},
            (error, rules) => {
                if (error) {
                    return this.alerts.error(error.message);
                }

                this.store.dispatch(setRules(rules));
            }
        );
    }

    installDefaultRules() {
        console.info('Installing Default rules...');

        window.socket.emit(
            SocketMethods.INSTALL_DEFAULT_RULES,
            {},
            (error, installedRules) => {
                if (error) {
                    return this.alerts.error(error.message);
                }

                this.alerts.success('Installed rules: ' + installedRules.join(', '));
                this.getAllRules();
            }
        );
    }

    saveRule(rule) {
        window.socket.emit(
            SocketMethods.SAVE_RULE,
            rule,
            (error, rule) => {
                if (error) {
                    return this.alerts.error(error.message);
                }

                this.alerts.success('Rule "' + rule.displayName + '" is updated');
                this.getAllRules();
            }
        );
    }
}
