import React from 'react';
import ReactDom from 'react-dom';

import {Admin} from './view/admin';
import {createStoreProvider} from './model/store';

export const init = () => {
    console.info('Initiate ACP: Embed');

    let Provider = createStoreProvider();

    ReactDom.render(
        <Provider>
            <Admin/>
        </Provider>,
        document.getElementById('acpEmbedContainer')
    );
};
