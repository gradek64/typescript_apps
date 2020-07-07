import React from 'react';
import ReactDOM from 'react-dom';

// custom
import ProposalClassProperties from './ES7-proposal-class-properties/ProposalClassProperties';

const Index = () => (
  <div className="helloworld">
    <h2>Weclcome to webpack 4 and babel7 444</h2>
    <ProposalClassProperties />
  </div>
);

ReactDOM.render(<Index />, document.querySelector('#root'));
