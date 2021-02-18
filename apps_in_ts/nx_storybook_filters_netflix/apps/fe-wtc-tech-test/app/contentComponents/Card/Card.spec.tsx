import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { VisibilityIcon } from '@mono-nx-test-with-nextjs/ui';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import wrapperIconHOC from '../../contentComponents/IconCTA/IconAction';

const VisibilityWatchedIcon = wrapperIconHOC(
  VisibilityIcon,
  VisibilityOffOutlinedIcon
);

const props = {
  callToAction: jest.fn(),
  icon: 'watch',
};

describe('should render correclty with initial state', () => {
  afterEach(cleanup);
  it('should render and take a snapshot', () => {
    const { asFragment } = render(<VisibilityWatchedIcon {...props} />);
    const component = asFragment();
    expect(component).toMatchSnapshot();
  });
});

describe('toggles the visibillity of the icons', () => {
  afterEach(cleanup);
  it('icons should switch from visible to invisible after click action', () => {
    const { container } = render(<VisibilityWatchedIcon {...props} />);
    const IconWrapper = container.querySelector('div div');
    const iconTop = container.querySelector('svg path');
    expect(IconWrapper.outerHTML.includes(iconTop.outerHTML)).toBe(true);
    fireEvent.click(IconWrapper);
    expect(IconWrapper.outerHTML.includes(iconTop.outerHTML)).toBe(false);

    const iconBottom = container.querySelector('svg path');
    expect(IconWrapper.outerHTML.includes(iconBottom.outerHTML)).toBe(true);
    fireEvent.click(IconWrapper);
    expect(IconWrapper.outerHTML.includes(iconBottom.outerHTML)).toBe(false);
  });
});
