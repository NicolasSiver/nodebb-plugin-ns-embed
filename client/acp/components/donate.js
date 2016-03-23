/**
 * Created by Nicolas on 10/26/15.
 */
import React from 'react';

export default class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {amount: null};
    }

    amountDidChange(e) {
        this.setState({
            amount: e.target.value
        });
    }

    componentDidMount() {
        this.stripeHandler = window.StripeCheckout.configure({
            key       : 'pk_live_AcfQs725nv7nIF5sRCG3v4Q8',
            image     : 'https://s3.amazonaws.com/stripe-uploads/acct_16mDSJB8UmE70jk7merchant-icon-1442539384457-ava-mdpi.jpg',
            locale    : 'auto',
            panelLabel: 'Donate {{amount}}',
            email     : window.app.user.email,
            bitcoin   : true,
            token     : function (token) {
                // Use the token to create the charge with a server-side script.
                // You can access the token ID with `token.id`
                // NOOP
            }
        });
    }

    donateDidClick() {
        var amount = parseFloat(this.state.amount) * 100;
        amount = amount || 500;

        this.stripeHandler.open({
            name       : 'Nicolas Siver',
            description: 'NS Embed Donation',
            amount     : amount
        });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <p>Do you like plugin? Support developer. Make a donation. Thank you.</p>

                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Amount"
                            value={this.state.amount}
                            onChange={this.amountDidChange.bind(this)}/>
                        <span className="input-group-btn">
                            <button
                                className="btn btn-primary"
                                type="button"
                                onClick={this.donateDidClick.bind(this)}>Donate <small>via Stripe</small>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
