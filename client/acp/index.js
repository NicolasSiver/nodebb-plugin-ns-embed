import React from 'react';
import ReactDom from 'react-dom';

import {Admin} from './view/admin';
import {changeRuleField} from './controller/change-rule-field';
import {SocketService} from './service/socket-service';
import {createInitialState, createStore, createStoreProvider} from './model/store';

export const init = () => {
    console.info('Initiate ACP: Embed');

    let store = createStore(createInitialState());
    let Provider = createStoreProvider(store);
    let socketService = new SocketService(store);

    ReactDom.render(
        <Provider>
            <Admin
                fieldWillChange={(rule, field, value) => changeRuleField(rule, field, value, store)}
                installDefaultRules={() => socketService.installDefaultRules()}
                ruleWillDelete={rule => socketService.deleteRule(rule)}
                ruleWillSave={rule => socketService.saveRule(rule)}/>
        </Provider>,
        document.getElementById('acpEmbedContainer')
    );

    socketService.getAllRules();
};
