import Admin from './components/admin';
import React from 'react';
import ReactDom from 'react-dom';

export const init = () => {
    ReactDom.render(
        <Admin />,
        document.getElementById('acpEmbedContainer')
    );
};
