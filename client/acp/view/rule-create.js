import React from 'react';

import {FormActions} from './form-actions';
import {isRuleValid} from '../util/is-rule-valid';
import {RuleForm} from './rule-form';

export const RuleCreate = props => {
    let valid = isRuleValid(props.name, props.displayName, props.regex, props.replacement);

    return (
        <div className="panel panel-default">
            <div className="panel-heading">Create Rule</div>
            <div className="panel-body">
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
