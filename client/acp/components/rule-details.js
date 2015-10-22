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

    delete(rule){
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

        return (
            <div className="actions">
                <button
                    className="btn btn-primary"
                    disabled={this.isValidOkButton() ? '' : 'disabled'}
                    onClick={this.save.bind(this, rule)}
                    type="button">{okMessage}
                </button>
                
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

                    {this.getActions(this.props.rule)}

                </div>
            </div>
        );
    }

    save(rule) {
        console.info('Saving...', rule);
    }
}