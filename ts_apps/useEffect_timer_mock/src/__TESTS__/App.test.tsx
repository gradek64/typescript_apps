import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../AppSetTimeout';



jest.mock('../mockApi', () => ({
  get: () => Promise.resolve({
    "image": "https://i.pravatar.cc/300?u=100",
    "id": 100,
    "text": "100. \"The impression of his right foot was always less distinct than\nhis left. He put less weight upon it. Why? Because he limped--he\nwas lame.\"",
    "username": "Petra.Dickens",
    "timeStamp": 1612376641026
  }),
}))

test('renders App component', async () => {
  const { asFragment } = render(<App />);
  //after http response
  await waitFor(() => {
    console.log('it has been updated')
  })
  expect(asFragment()).toMatchSnapshot();

});
