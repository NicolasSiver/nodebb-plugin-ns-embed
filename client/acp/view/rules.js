import classNames from 'classnames';
import React, {useContext} from 'react';

import * as Constants from '../model/constants';
import {getSelectedRule, getRules} from '../model/selectors';
import {StoreContext} from '../model/store';

export const Rules = () => {
    let {store} = useContext(StoreContext);
    let state = store.getState();
    let selectedRule = getSelectedRule(state);
    let rules = getRules(state);

    let RuleItem = data => {
        let icon = classNames('fa', data.icon || 'fa-cogs');
        let item = classNames('item', {
            selected: selectedRule !== null && data.name === selectedRule.name
        });

        return (
            <div
                key={data.rid} className={item}
                onClick={() => undefined}>
                <i className={icon}/> {data.displayName}
            </div>
        );
    };

    function renderRules(rules) {
        let ruleCreate = RuleItem({
            displayName: 'Create Rule',
            icon       : 'fa-plus',
            name       : Constants.DEFAULT_RULE_ACTION,
            rid        : Constants.DEFAULT_RULE_ACTION
        });
        let ruleComponents = rules.map(rule => RuleItem(rule));

        return [ruleCreate, ...ruleComponents];
    }

    return (
        <div className="panel panel-default">
            <div className="panel-heading">Installed Rules</div>
            <div className="panel-body">
                <div className="rules">
                    {renderRules(rules)}
                </div>
            </div>
        </div>
    );
};
