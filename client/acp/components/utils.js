/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import React from 'react';

export default class Utils extends React.Component {
    constructor(props) {
        super(props);
    }

    defaultRulesDidClick() {
        Actions.installDefaultRules();
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Utils</div>
                <div className="panel-body">
                    <p className="utils-info">Install rules that are shipped with plugin: youtube, vimeo, etc. Please, check plugin documentation for the full list. If rule with the same name is installed already, rule from default pack will be skipped.</p>

                    <button
                        className="btn btn-default btn-block"
                        onClick={this.defaultRulesDidClick}
                        type="button">Install Default Rules
                    </button>
                </div>
            </div>
        );
    }
}
