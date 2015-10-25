/**
 * Created by Nicolas on 10/25/15.
 */
import classNames from 'classnames';
import React from 'react';

export default class RuleForm extends React.Component {
    constructor(props) {
        super(props);
    }

    inputDidChange(field, event) {
        this.props.propDidChange(field, event.target.value);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="labelName">Name</label>
                            <input
                                id="labelName"
                                type="text"
                                className="form-control field-lower"
                                onBlur={this._validateSpecialChars}
                                onChange={this.inputDidChange.bind(this, 'name')}
                                value={this.props.name}
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
                                onChange={this.inputDidChange.bind(this, 'displayName')}
                                value={this.props.displayName}
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
                                onChange={this.inputDidChange.bind(this, 'regex')}
                                value={this.props.regex}
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
                                    onChange={this.inputDidChange.bind(this, 'replacement')}
                                    value={this.props.replacement}
                                    placeholder="Replacement, you can use capturing groups via $1, $2, etc."/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

RuleForm.propTypes = {
    name         : React.PropTypes.string,
    displayName  : React.PropTypes.string,
    regex        : React.PropTypes.string,
    replacement  : React.PropTypes.string,
    propDidChange: React.PropTypes.func.isRequired
};