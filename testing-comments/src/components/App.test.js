import { shallow } from 'enzyme';
import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import RootProvider from '../root';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <RootProvider>
        <App />
      </RootProvider>
    )
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('renders without crashing', () => {
    expect(wrapper.find('h1').text()).toEqual('Commenter!')
  });

  it('renders the Comment components', () => {
    expect(wrapper.containsMatchingElement(<CommentBox />)).toEqual(true)
    expect(wrapper.containsMatchingElement(<CommentList />)).toEqual(true)
  })

})
