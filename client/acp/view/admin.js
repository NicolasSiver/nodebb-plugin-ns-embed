import React, {useContext} from 'react';

import * as Constants from '../model/constants';
import {Rules} from './rules';
import {getSelectedRule} from '../model/selectors';
import {StoreContext} from '../model/store';

export const Admin = () => {
    let {store} = useContext(StoreContext);

    function renderExtendedView() {
        let view = null;
        let selectedRule = getSelectedRule(store.getState());

        if (selectedRule !== null) {
            if (selectedRule.name === Constants.DEFAULT_RULE_ACTION) {
                view = 'Create...';
                // view = <RuleCreate/>;
            } else {
                view = 'Details...';
                // view = <RuleDetails rule={this.props.selectedRule}/>;
            }
        }

        return view;
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <Rules/>

                {/*<Utils/>*/}

            </div>
            <div className="col-md-6">
                {/*{renderExtendedView()}*/}
            </div>
        </div>
    );
};
