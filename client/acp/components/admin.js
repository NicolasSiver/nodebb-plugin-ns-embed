import objectAssign from 'object-assign';
import React from 'react';

import Actions from '../actions';
import Rule from '../models/rule';
import RuleCreate from './rule-create';
import RuleDetails from './rule-details';
import RulesList from './rules-list';
import RulesStore from '../stores/rules-store';
import Utils from './utils';

export default class Admin extends React.Component {
    static getStores() {
        return [RulesStore];
    }

    static getPropsFromStores() {
        return objectAssign({}, RulesStore.getState());
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Actions.getAllRules();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <RulesList
                        rules={this.props.rules}
                        selected={this.props.selectedRule}/>

                    <div className="row">
                        <div className="col-md-12">
                            <Utils/>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    {this.renderExtendedView()}
                </div>
            </div>
        );
    }

    renderExtendedView() {
        let view = null;

        if (this.props.selectedRule !== null) {
            if (this.props.selectedRule.name === Rule.CREATE) {
                view = <RuleCreate/>;
            } else {
                view = <RuleDetails rule={this.props.selectedRule}/>;
            }
        }

        return view;
    }
}
