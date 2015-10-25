/**
 * Created by Nicolas on 10/21/15.
 */
import Actions from '../actions';
import classNames from 'classnames';
import React from 'react';
import Rule from '../models/rule';
import RuleForm from './rule-form';

export default class RuleDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    actionCreate() {
        console.info('Create');
    }

    actionDelete(rule) {
        console.info('Delete');
    }

    actionReset() {
        console.info('Reset');
    }

    actionSave(rule) {
        console.info('Save');
    }

    getActions(rule) {
        let isCreate = rule.name === Rule.CREATE;
        let okButton = (
            <button
                className="btn btn-primary"
                disabled={this.props.valid ? '' : 'disabled'}
                onClick={(isCreate) ? this.actionCreate.bind(this) : this.actionSave.bind(this, rule)}
                type="button">{(isCreate) ? 'Create' : 'Save'}
            </button>
        );
        let deleteButton = (isCreate) ? null : (
            <button
                className="btn btn-danger"
                onClick={this.actionDelete.bind(this, rule)}
                type="button">Delete
            </button>
        );
        let resetButton = (!isCreate) ? null : (
            <button
                className="btn btn-warning"
                onClick={this.actionReset.bind(this)}
                type="button">Reset
            </button>
        );

        return (
            <div className="actions">
                {okButton}
                {resetButton}
                {deleteButton}
            </div>
        );
    }

    getName(rule) {
        if (rule.name === Rule.CREATE) {
            return rule.displayName;
        }
        return 'Rule: ' + rule.displayName;
    }

    render() {
        if (!this.props.rule) {
            return null;
        }

        let name = this.getName(this.props.rule);

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{name}</div>
                <div className="panel-body">

                    <RuleForm />

                    {this.getActions(this.props.rule)}

                </div>
            </div>
        );
    }
}

RuleDetails.propTypes = {
    rule: React.PropTypes.object
};