import React from 'react';
import { render, cleanup } from '@testing-library/react';
import IconsStateManagement from './IconsStateManagement';

const props = {
  callToActionCardColor: jest.fn(),
  watch: true,
  favorite: false,
};

describe('should render correclty diffrent props', () => {
  beforeEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment, unmount } = render(<IconsStateManagement {...props} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
    unmount();
  });
  it('should render with watch and favorite props changed and take a snapshot', () => {
    const propsChange = { ...props, watch: false, favorite: false };
    const { asFragment, unmount } = render(
      <IconsStateManagement {...propsChange} />
    );
    const component = asFragment();
    expect(component).toMatchSnapshot();
    unmount();
  });
});

describe('calling callback callToActionCardColor', () => {
  beforeEach(cleanup);
  it('calls callToActionCardColor once component is loaded', () => {
    render(<IconsStateManagement {...props} />);
    expect(props.callToActionCardColor).toBeCalledWith({
      watch: true,
      favorite: false,
    });
  });
});
