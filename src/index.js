import React, {Component} from 'react';
import {render} from 'react-dom';
import CreditCardForm from './CreditCardForm';

class AppContainer extends Component {

    postPaymentInformation(paymentInfoFromUser) {
        console.log('Inside of AppContainer', paymentInfoFromUser);
    }

    render() {
        return (
          <div>
              <CreditCardForm
                type="Mastercard"
                ccv="123"
                whenSubmitted={info => console.table([info])}
              />
          </div>
        )
    }

}

render(
  <AppContainer />,
  document.getElementById('app')
);