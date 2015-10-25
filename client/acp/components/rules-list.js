/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import classNames from 'classnames';
import React from 'react';
import Rule from '../models/rule';

export default class RulesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Installed Rules</div>
                <div className="panel-body">
                    <div className="rules">
                        {this.renderRules(this.props.rules)}
                    </div>
                </div>
            </div>
        );
    }

    renderRules(rules) {
        let i = 0, len = rules.length, rule, result = [];

        let RuleItem = (data) => {
            let icon = classNames('fa', data.icon || 'fa-cogs');
            let item = classNames('item', {
                selected: this.props.selected && data.name === this.props.selected.name
            });
            return (
                <div key={data.rid} className={item}
                     onClick={this.ruleDidClick.bind(this, data)}>
                    <i className={icon}></i> {data.displayName}
                </div>
            );
        };

        // Rule Creation Item
        result.push(RuleItem({displayName: 'Create Rule', name: Rule.CREATE, rid: Rule.CREATE, icon: 'fa-plus'}));

        for (i; i < len; ++i) {
            rule = rules[i];
            result.push(RuleItem(rule));
        }

        return result;
    }

    ruleDidClick(rule) {
        Actions.selectRule(rule);
    }
}