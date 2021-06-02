import React from 'react';

export const FormActions = props => {
    let okButton = (props.okButton) ? createButton(
        props.okButton,
        'btn btn-primary',
        props.okValid,
        props.okButtonClick
    ) : null;
    let warningButton = (props.warningButton) ? createButton(
        props.warningButton,
        'btn btn-warning',
        props.warningValid,
        props.warningButtonClick
    ) : null;
    let dangerButton = (props.dangerButton) ? createButton(
        props.dangerButton,
        'btn btn-danger',
        props.dangerValid,
        props.dangerButtonClick
    ) : null;

    function createButton(text, style, valid, callback) {
        callback = callback || (event => {
            console.warn('Action Callback is not provided');
        });
        return (
            <button
                className={style}
                disabled={valid === true ? '' : 'disabled'}
                onClick={callback}
                type="button">{text}
            </button>
        );
    }

    return (
        <div className="actions">
            {okButton}
            {warningButton}
            {dangerButton}
        </div>
    );
}
