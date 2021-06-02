import {setRules} from '../controller/actions';
import * as SocketMethods from '../model/socket-methods';

export class SocketService {
    constructor(store) {
        this.store = store;
    }

    // createNewRule() {
    //     window.socket.emit(
    //         SocketMethods.CREATE_RULE,
    //         CreateStore.getState(),
    //         (error, rule) => {
    //             if (error) {
    //                 return window.app.alertError(error.message);
    //             }
    //
    //             Actions.ruleDidCreate();
    //             Actions.getAllRules();
    //         }
    //     );
    // }

    deleteRule(rule) {
        window.socket.emit(
            SocketMethods.DELETE_RULE,
            rule,
            (error, rule) => {
                if (error) {
                    return window.app.alertError(error.message);
                }

                window.app.alertSuccess('Rule "' + rule.displayName + '" is deleted');
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
                    return window.app.alertError(error.message);
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
                    return window.app.alertError(error.message);
                }

                window.app.alertSuccess('Installed rules: ' + installedRules.join(', '));
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
                    return window.app.alertError(error.message);
                }

                window.app.alertSuccess('Rule "' + rule.displayName + '" is updated');
                this.getAllRules();
            }
        );
    }
}