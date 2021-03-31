import React, { useState } from 'react';

const Location = () => {
  const [DynamicComponentLoaded, setDynamicComponent]
    = useState<null | (() => JSX.Element)>(null)

  const loadComponent = async () => {
    const module = await import('../components/functional/DynamicLocationPage')
    //this method only works for default exports
    setDynamicComponent(() => module.default)

  }

  return (
    <div>
      {!!DynamicComponentLoaded ?
        <DynamicComponentLoaded />
        : <button onClick={loadComponent}>Load Location Component dynamically</button>}
    </div>
  );

}

export default Location;

/* class Location extends React.Component {

  // :(() => JSX.Element) this react construction type needed for react jsx component execution
  //as <DynamicComponentLoaded /> in TS
  state: { DynamicComponentLoaded: null | (() => JSX.Element) } = {
    DynamicComponentLoaded: null
  }


  loadComponent = () => {
    import('../components/functional/DynamicLocationPage').then((module) => {
      //this method only works for default exports
      this.setState({ DynamicComponentLoaded: module.default })
    })
  }

  render() {
    const { DynamicComponentLoaded } = this.state;
    return (
      <div>
        {!!DynamicComponentLoaded ?
          <DynamicComponentLoaded />
          : <button onClick={this.loadComponent}>Load Location Component dynamically</button>}
      </div>
    );
  }
} */


