import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the components and search component with data', () => {
    render(<App />);

    // Verify that the components are rendered
    expect(screen.getByText('Making Mootools and React Talk')).toBeInTheDocument();


    // Verify that the search component is rendered
    expect(screen.getByText('Simple React Search Component')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});



