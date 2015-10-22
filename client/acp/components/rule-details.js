/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import classNames from 'classnames';
import React from 'react';
import Rule from '../models/rule';

export default class RuleDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    getName(rule){
        if(rule.name === Rule.CREATE){
            return rule.displayName;
        }
        return 'Rule: ' + rule.displayName;
    }

    render() {
        if(!this.props.rule){
            return null;
        }

        let name = this.getName(this.props.rule);

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{name}</div>
                <div className="panel-body">

                </div>
            </div>
        );
    }
}