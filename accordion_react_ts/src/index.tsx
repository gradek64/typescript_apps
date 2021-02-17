import React from 'react';
import ReactDOM from 'react-dom';

// custom
import Accordion from './Accordion/Accordion';
import customEventAccordionState from './customEvents/dispatchEvent'


//to call accordion from any component 


const InputComp = (props: { key: string }) => <input type="text" {...props} />;

const style = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  border: '1px dotted green',
};


/*  
  Accordion should be able to close also from inside thefore custom event 
  has been set as :
  
  1. pass event trigger to the Accordion component as the prop

  onOpenCloseEvent={'ON_ACCORDION_STATE'}

  2. register it in Accordion component with EVENT trigger and function to execute

    customEventAccordionState.on('ON_ACCORDION_STATE',openAccordion)

  3. call custom event in any component by 
  
  onClick={()=>customEventAccordionState.emit('ON_ACCORDION_STATE')}

  //is important to extend with another fucntion so typescript doesnt complain about
  //React.MouseEvent not being set ;)

*/
const Index = () => (
  <>
    <h2>Accordion</h2>
    <Accordion onOpenCloseEvent={'ON_ACCORDION_STATE'}>
      <div style={style}>
        <h2>this is beginning of the Accordion</h2>
        {[1, 2, 3].map((i) => (
          <InputComp key={`input${i}`} />
        ))}
        <h2>this is the of the Accordion</h2>
      </div>
      <div style={style}>
        <h2>this is beginning of the Accordion</h2>
        {[1, 2, 3].map((i) => (
          <InputComp key={`input${i}`} />
        ))}
        <h2>this is the of the Accordion</h2>
        <button onClick={()=>customEventAccordionState.emit('ON_ACCORDION_STATE')}>CLOSE ACCORDIOM from inside</button>
      </div>
    </Accordion>
  </>
);

ReactDOM.render(<Index />, document.querySelector('#root'));
