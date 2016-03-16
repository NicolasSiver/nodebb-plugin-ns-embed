/**
 * Created by Nicolas on 10/25/15.
 */
import Actions from '../actions';
import classNames from 'classnames';
import connectToStores from 'alt-utils/lib/connectToStores';
import CreateStore from '../stores/create-store';
import FormActions from './form-actions';
import React from 'react';
import RuleForm from './rule-form';

class RuleCreate extends React.Component {
    static getStores() {
        return [CreateStore];
    }

    static getPropsFromStores() {
        return CreateStore.getState();
    }

    constructor(props) {
        super(props);
    }

    actionCreate(){
        Actions.createNewRule();
    }

    actionReset() {
        Actions.resetNewRule();
    }

    fieldDidChange(field, value) {
        Actions.newRuleFieldDidUpdate(field, value);
    }

    render() {

        return (
            <div className="panel panel-default">
                <div className="panel-heading">Create Rule</div>
                <div className="panel-body">

                    <RuleForm
                        {...this.props}
                        propDidChange={this.fieldDidChange.bind(this)}/>

                    <FormActions
                        okButton="Create"
                        okButtonClick={this.actionCreate}
                        okValid={this.props.valid}
                        warningButton="Reset"
                        warningButtonClick={this.actionReset}
                        warningValid={true}/>

                </div>
            </div>
        );
    }
}

export default connectToStores(RuleCreate);