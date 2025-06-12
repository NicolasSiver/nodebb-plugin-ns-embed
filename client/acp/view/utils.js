import React from 'react';

export const Utils = props => {
    return (
        <div className="card">
            <div className="card-header">Utils</div>
            <div className="card-body">
                <p className="utils-info">
                    Install the rules shipped with the plugin, such as YouTube and Vimeo. 
                    Please, check the plugin documentation for the full list. 
                    If a rule with the same name is installed already, the rule from the default pack will be skipped.
                </p>

                <button
                    className="btn btn-outline-secondary btn-block"
                    onClick={() => props.installDefaultRules()}
                    type="button">
                    Install Default Rules
                </button>
            </div>
        </div>
    );
};
