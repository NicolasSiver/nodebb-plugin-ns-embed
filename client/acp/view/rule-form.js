import React from 'react';

export const RuleForm = props => {
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
                            onChange={event => props.propDidChange('name', event.target.value)}
                            value={props.name}
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
                            onChange={event => props.propDidChange('displayName', event.target.value)}
                            value={props.displayName}
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
                            onChange={event => props.propDidChange('regex', event.target.value)}
                            value={props.regex}
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
                            onChange={event => props.propDidChange('replacement', event.target.value)}
                            value={props.replacement}
                            placeholder="Replacement, you can use capturing groups via $1, $2, etc."/>
                    </div>
                </div>
            </div>
        </div>
    );
}
