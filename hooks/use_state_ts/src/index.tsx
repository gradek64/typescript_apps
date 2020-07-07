import React from 'react';
import ReactDOM from 'react-dom';

// custom
import Form from './Form/form';

const Index = () => (
  <div className="helloworld">
    <Form />
  </div>
);

ReactDOM.render(<Index />, document.querySelector('#root'));
