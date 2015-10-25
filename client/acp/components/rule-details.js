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
                disabled={this.isValidOkButton() ? '' : 'disabled'}
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

    isValidOkButton() {
        return false;
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

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="labelName">Name</label>
                                <input
                                    id="labelName"
                                    type="text"
                                    className="form-control field-lower"
                                    onBlur={this._validateSpecialChars}
                                    placeholder="name (Ex: youtube)"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="labelDisplayName">Display Name</label>
                                <input
                                    id="labelDisplayName"
                                    type="text"
                                    className="form-control"
                                    placeholder="Display Name (Ex: Youtube)"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="labelWatch">Watch</label>
                                <input
                                    id="labelWatch"
                                    type="text"
                                    className="form-control"
                                    placeholder="Regular expression"/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="labelReplace">Replace</label>
                                <textarea
                                    id="labelReplace"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Replacement, you can use capturing groups via $1, $2, etc."/>
                            </div>
                        </div>
                    </div>

                    {this.getActions(this.props.rule)}

                </div>
            </div>
        );
    }
}

RuleDetails.propTypes = {
    rule: React.PropTypes.object
};