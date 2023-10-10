import React from 'react';

export const Utils = props => {
    return (
        <div className="card">
            <div className="card-header">Utils</div>
            <div className="card-body">
                <p className="utils-info">
                    Install rules that are shipped with plugin: Youtube, Vimeo, etc. Please,
                    check plugin documentation for the full list. If rule with the same name is installed already,
                    rule from default pack will be skipped.
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
