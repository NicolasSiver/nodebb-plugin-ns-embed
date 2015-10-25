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

    delete(rule) {
        console.info('Deleting...');
    }

    getActions(rule) {
        let isCreate = rule.name === Rule.CREATE;
        let okMessage = (isCreate) ? 'Create' : 'Save';
        let deleteButton = (isCreate) ? null : (
            <button
                className="btn btn-danger"
                onClick={this.delete.bind(this, rule)}
                type="button">Delete
            </button>
        );
        let resetButton = (!isCreate) ? null : (
            <button
                className="btn btn-warning"
                onClick={this.reset.bind(this)}
                type="button">Reset
            </button>
        );

        return (
            <div className="actions">
                <button
                    className="btn btn-primary"
                    disabled={this.isValidOkButton() ? '' : 'disabled'}
                    onClick={this.save.bind(this, rule)}
                    type="button">{okMessage}
                </button>

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

    reset() {
        console.log('Resetting...');
    }

    save(rule) {
        console.info('Saving...', rule);
    }
}