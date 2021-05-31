import React from 'react';
import ReactDom from 'react-dom';

import {Admin} from './view/admin';

export const init = () => {
    console.info('Initiate ACP: Embed');

    ReactDom.render(
        <Admin />,
        document.getElementById('acpEmbedContainer')
    );
};
