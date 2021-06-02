import React, {useContext} from 'react';

import * as Constants from '../model/constants';
import {RuleDetails} from './rule-details';
import {Rules} from './rules';
import {getSelectedRule} from '../model/selectors';
import {StoreContext} from '../model/store';
import {Utils} from './utils';

export const Admin = props => {
    let {store} = useContext(StoreContext);

    function renderExtendedView() {
        let view = null;
        let selectedRule = getSelectedRule(store.getState());

        if (selectedRule !== null) {
            if (selectedRule.name === Constants.DEFAULT_RULE_ACTION) {
                view = 'Create...';
                // view = <RuleCreate/>;
            } else {
                view = <RuleDetails rule={selectedRule} {...props}/>;
            }
        }

        return view;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <Rules/>
                <Utils {...props}/>
            </div>
            <div className="col-md-6">
                {renderExtendedView()}
            </div>
        </div>
    );
};
