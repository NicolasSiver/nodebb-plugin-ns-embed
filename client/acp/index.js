import Admin from './components/admin';
import connectToStores from 'alt-utils/lib/connectToStores';
import React from 'react';
import ReactDom from 'react-dom';

export const init = () => {
    if (process.env.NODE_ENV !== 'production') {
        console.info('Initiate ACP: Embed');
    }

    const AltAdmin = connectToStores(Admin);

    ReactDom.render(
        <AltAdmin />,
        document.getElementById('acpEmbedContainer')
    );
};
