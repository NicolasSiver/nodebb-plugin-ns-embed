import React from 'react';

import {FormActions} from './form-actions';
import {isRuleValid} from '../util/is-rule-valid';
import {RuleForm} from './rule-form';

export const RuleCreate = props => {
    let valid = isRuleValid(props.rule.name, props.rule.displayName, props.rule.regex, props.rule.replacement);

    return (
        <div className="card">
            <div className="card-header">Create Rule</div>
            <div className="card-body">
                <RuleForm
                    propDidChange={(property, value) => props.newRuleFieldWillChange(property, value)}
                    {...props}/>

                <FormActions
                    okButton="Create"
                    okButtonClick={() => props.ruleWillCreate()}
                    okValid={valid}
                    warningButton="Reset"
                    warningButtonClick={() => props.ruleWillReset()}
                    warningValid={true}/>
            </div>
        </div>
    );
}
