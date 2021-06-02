import React from 'react';

import {FormActions} from './form-actions';
import {RuleForm} from './rule-form';

export const RuleDetails = props => {
    let name = 'Rule: ' + props.rule.displayName;

    return (
        <div className="panel panel-default">
            <div className="panel-heading">{name}</div>
            <div className="panel-body">
                <RuleForm
                    {...props}
                    propDidChange={(property, value) => props.fieldWillChange(props.rule, property, value)}/>

                <FormActions
                    dangerButton="Delete"
                    dangerButtonClick={() => props.ruleWillDelete(props.rule)}
                    dangerValid={true}
                    okButton="Save"
                    okButtonClick={() => props.ruleWillCreate(props.rule)}
                    okValid={true}/>
            </div>
        </div>
    );
}
