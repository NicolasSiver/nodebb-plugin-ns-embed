import React from 'react';

import * as Constants from '../model/constants';
import {getSelectedRule} from '../model/selectors';

export const Admin = () => {
    function renderExtendedView() {
        let view = null;
        let selectedRule = getSelectedRule(state);

        if (selectedRule !== null) {
            if (selectedRule.name === Constants.DEFAULT_RULE_ACTION) {
                // view = <RuleCreate/>;
            } else {
                // view = <RuleDetails rule={this.props.selectedRule}/>;
            }
        }

        return view;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                {/*<RulesList*/}
                {/*    rules={this.props.rules}*/}
                {/*    selected={this.props.selectedRule}/>*/}

                <div className="row">
                    <div className="col-md-12">
                        {/*<Utils/>*/}
                    </div>
                </div>

            </div>
            <div className="col-md-6">
                {renderExtendedView()}
            </div>
        </div>
    );
};
