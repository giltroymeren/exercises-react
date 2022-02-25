import React from 'react';
import { mount } from 'enzyme';

import RootProvider from '../root';
import CommentList from './CommentList';

describe('CommentList', () => {
  let wrapper;

  describe('Empty state', () => {
    beforeEach(() => {
      wrapper = mount(
        <RootProvider>
          <CommentList />
        </RootProvider>
      )
    })

    afterEach(() => {
      wrapper.unmount();
    })

    it('renders without crashing', () => {
      expect(wrapper.find('h2').text()).toEqual('List of comments:')
    });

    it('renders when there are no comments', () => {
      expect(wrapper.find('p').text()).toEqual('No comments available!')
    })
  })

  describe('Filled state', () => {
    const initialState = {
      comments: Array.from(Array(5), (v, i) => `Comment # ${i}`)
    }

    beforeEach(() => {
      wrapper = mount(
        <RootProvider initialState={initialState}>
          <CommentList />
        </RootProvider>
      )
    })

    afterEach(() => {
      wrapper.unmount();
    })

    it('renders X comments as X number of list items', () => {
      expect(wrapper.find('li')).toHaveLength(initialState.comments.length)
    });

    it('renders X comments as X list items', () => {
      for (let i = 0; i < initialState.comments.length; i++) {
        expect(wrapper.render().text()).toContain(initialState.comments[i])
      }
    })
  })
})
