import React from 'react';

import {FormActions} from './form-actions';
import {RuleForm} from './rule-form';

export const RuleDetails = props => {
    let name = 'Rule: ' + props.rule.displayName;

    return (
        <div className="card">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <RuleForm
                    propDidChange={(property, value) => props.fieldWillChange(props.rule, property, value)}
                    {...props}/>

                <FormActions
                    dangerButton="Delete"
                    dangerButtonClick={() => props.ruleWillDelete(props.rule)}
                    dangerValid={true}
                    okButton="Save"
                    okButtonClick={() => props.ruleWillSave(props.rule)}
                    okValid={true}/>
            </div>
        </div>
    );
}
