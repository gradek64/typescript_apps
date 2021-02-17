import React from 'react';

// custom;
import './styles.scss';

class Proposal extends React.Component {
  state = {
    property: 'Proposal',
  };

  render() {
    const { property } = this.state;
    console.log(property);
    return (
      <span className="my-class">{`value from state is there yeah ${property}`}</span>
    );
  }
}

export default Proposal;
