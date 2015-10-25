/**
 * Created by Nicolas on 10/25/15.
 */
import classNames from 'classnames';
import React from 'react';

export default class FormActions extends React.Component {
    constructor(props) {
        super(props);
    }

    createButton(text, style, valid, callback) {
        callback = callback || ((e) => {
                console.warn('Action Callback is not provided');
            });
        return (
            <button
                className={style}
                disabled={valid ? '' : 'disabled'}
                onClick={callback}
                type="button">{text}
            </button>
        );
    }

    render() {
        let okButton = (this.props.okButton) ? this.createButton(
            this.props.okButton,
            'btn btn-primary',
            this.props.okValid,
            this.props.okButtonClick
        ) : null;
        let warningButton = (this.props.warningButton) ? this.createButton(
            this.props.warningButton,
            'btn btn-warning',
            this.props.warningValid,
            this.props.warningButtonClick
        ) : null;
        let dangerButton = (this.props.dangerButton) ? this.createButton(
            this.props.dangerButton,
            'btn btn-danger',
            this.props.dangerValid,
            this.props.dangerButtonClick
        ) : null;

        return (
            <div className="actions">
                {okButton}
                {warningButton}
                {dangerButton}
            </div>
        );
    }
}

FormActions.propTypes = {
    okButton          : React.PropTypes.string,
    dangerButton      : React.PropTypes.string,
    warningButton     : React.PropTypes.string,
    okButtonClick     : React.PropTypes.func,
    dangerButtonClick : React.PropTypes.func,
    warningButtonClick: React.PropTypes.func,
    okValid           : React.PropTypes.bool,
    dangerValid       : React.PropTypes.bool,
    warningValid      : React.PropTypes.bool
};