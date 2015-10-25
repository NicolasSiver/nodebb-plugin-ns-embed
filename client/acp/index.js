/**
 * Created by Nicolas on 10/21/15.
 */
import Admin from './components/admin';
import React from 'react';
import ReactDom from 'react-dom';
import SocketService from './services/socket-service';

ReactDom.render(
    <Admin />,
    document.getElementById('acpEmbedContainer')
);
