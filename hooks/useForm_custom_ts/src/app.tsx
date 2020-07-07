import React from 'react';

// custom
import AddressForm from './Form/AddressForm';
import BillingForm from './Form/BillingForm';
import customEvent from './customEvents/dispatchEvent';
const handleSubmitAll = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  customEvent.emit('SUBMIT_ALL', event);
};

/**
 * customEvent has to be register with one of the form handleSubmit
 * event handler method just once thefore is only pass
 * in AddressForm but it could have been in BillingForm
 **/

const App = () => (
  <div className="helloworld">
    <h2>AddressForm validation</h2>
    <AddressForm id="addressForm" eventOn="SUBMIT_ALL" />
    <h2>BillingForm validation</h2>
    <BillingForm id="accountForm" />
    <div id="submitAll">
      <form onSubmit={handleSubmitAll} id="all">
        <input type="submit" value="submit" disabled={false} />
      </form>
    </div>
  </div>
);
export default App;

//IMPORTANT
/**
 *  react-render-libray using actual ReactDom.render
 *  to render component in testing enviroment
 *  (enzyme doesnt so ReactDOM.render(<Index />, document.getElementById('root'))
 *  can be in this component, but if U use react-render-library
 *  ReactDOM.render(<Index /> must be put in different file
 *  since it clashes with that implementation of react-render-libray
 *  ReactDOM.render(<Index />) can not be mocked (it can with enzyme) caused it
 *  either cause ReactDOM.render is used by react-render-libray
 */

//ReactDOM.render(<Index />, document.getElementById('root'));
