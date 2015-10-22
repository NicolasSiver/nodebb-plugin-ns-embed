/**
 * Created by Nicolas on 10/21/15.
 */
import classNames from 'classnames';
import React from 'react';

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
            let style = classNames('fa', data.icon || 'fa-cogs');

            return (
                <div key={data.name} className="item"
                     onClick={this.ruleDidClick.bind(this, data)}>
                    <i className={style}></i> {data.displayName}
                </div>
            );
        };

        for (i; i < len; ++i) {
            rule = rules[i];

            if (i == 0) {
                // Inject create item
                result.push(RuleItem({displayName: 'Create Rule', name: 'create', icon: 'fa-plus'}));
            }

            result.push(RuleItem(rule));
        }

        return result;
    }

    ruleDidClick(rule) {
        console.log('clicked', rule);
    }
}