import React from 'react';
import ReactDom from 'react-dom';

import { setNewRule } from './controller/actions';
import { Admin } from './view/admin';
import { changeNewRuleField } from './controller/change-new-rule-field';
import { changeRuleField } from './controller/change-rule-field';
import { getNewRule } from './model/selectors';
import { SocketService } from './service/socket-service';
import { createInitialState, createStore, createStoreProvider } from './model/store';

export const init = async () => {
    console.info('Initiate ACP: Embed');

    let alerts = await window.app.require('alerts');
    let store = createStore(createInitialState());
    let Provider = createStoreProvider(store);
    let socketService = new SocketService(store, alerts);

    ReactDom.render(
        <Provider>
            <Admin
                fieldWillChange={(rule, field, value) => changeRuleField(rule, field, value, store)}
                installDefaultRules={() => socketService.installDefaultRules()}
                newRuleFieldWillChange={(field, value) => changeNewRuleField(field, value, store)}
                ruleWillCreate={() => socketService.createNewRule(getNewRule(store.getState()))}
                ruleWillDelete={rule => socketService.deleteRule(rule)}
                ruleWillReset={() => store.dispatch(setNewRule({}))}
                ruleWillSave={rule => socketService.saveRule(rule)} />
        </Provider>,
        document.getElementById('acpEmbedContainer')
    );

    socketService.getAllRules();
};
