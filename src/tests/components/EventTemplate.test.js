import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { EventTemplate } from '../../components/EventTemplate';

describe('Test on <EventTemplate />', () => {

  test('Testing eventName for EventTemplate Component', () => {
    const testName = "testName";
    const { getByText } = render(<EventTemplate eventName={testName} />);
    expect(getByText(testName)).toBeInTheDocument();
  });

  test('Testing hostName for EventTemplate Component', () => {
    const testHost = "testHost";
    const { getByText } = render(<EventTemplate hostName={testHost} />);
    expect(getByText(`Hosted by: ${testHost}`)).toBeInTheDocument();
  });

  test('Testing eventDescription for EventTemplate Component', () => {
    const testDescription = "testDescription";
    const { getByText } = render(<EventTemplate eventDescription={testDescription} />);
    expect(getByText(testDescription)).toBeInTheDocument();
  });

});
