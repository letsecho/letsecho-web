import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { EventTemplate } from '../../components/EventTemplate';

describe('Test on <EventTemplate />', () => {

  test('Displaying an empty EventTemplate Component', () => {
    const testName = "testA";
    const { getByText } = render(<EventTemplate eventName={testName} />);
    expect(getByText(testName)).toBeInTheDocument();
  });

});
