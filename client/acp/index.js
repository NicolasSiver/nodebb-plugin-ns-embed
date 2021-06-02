import React from 'react';
import ReactDom from 'react-dom';

import {Admin} from './view/admin';
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
                fieldWillChange={(rule, field, value) => undefined}
                installDefaultRules={() => socketService.installDefaultRules()}
                ruleWillCreate={rule => undefined}
                ruleWillDelete={rule => socketService.deleteRule(rule)}/>
        </Provider>,
        document.getElementById('acpEmbedContainer')
    );

    socketService.getAllRules();
};
