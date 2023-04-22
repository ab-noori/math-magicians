import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button className="my-class" text="Click me" onClick={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
