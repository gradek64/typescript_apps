import React from 'react';
import { shallow } from 'enzyme';

import ProposalClassProperties from './ProposalClassProperties';

test('renders correctly', () => {
  const wrapper = shallow(<ProposalClassProperties />);
  expect(wrapper).toMatchSnapshot();
});
