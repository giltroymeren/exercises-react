import { mount } from 'enzyme';
import React from 'react';

import RootProvider from '../root';
import CommentBox from './CommentBox';

const SELECTOR_COMMENT = '#form-comment'

describe('CommentBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <RootProvider>
        <CommentBox />
      </RootProvider>
    )
  })

  afterEach(() => {
    wrapper.unmount();
  })

  it('renders without crashing', () => {
    expect(wrapper.find('label').text()).toEqual('What do you think?')
  });

  it('renders a textarea', () => {
    expect(wrapper.find(SELECTOR_COMMENT)).toHaveLength(1)
  })

  it('renders reset and submit buttons', () => {
    expect(wrapper.find('#form-btn-reset')).toHaveLength(1)
    expect(wrapper.find('#form-btn-submit')).toHaveLength(1)
  })

  describe('Comment form', () => {
    const expectedComment = 'Expected comment.'

    beforeEach(() => {
      wrapper.find(SELECTOR_COMMENT).simulate('change', {
        target: { value: expectedComment }
      })
      wrapper.update()
    })

    it('has a textarea that users can enter comment', () => {
      expect(wrapper.find(SELECTOR_COMMENT).prop('value'))
        .toEqual(expectedComment)
    })

    it('has a textarea that users can enter a comment and submit', () => {
      wrapper.find('form').simulate('submit')
      wrapper.update()

      expect(wrapper.find(SELECTOR_COMMENT).prop('value'))
        .toEqual('')
    })

    it('has a textarea that users can enter comment and clear it', () => {
      wrapper.find('#form-btn-reset').simulate('click')
      wrapper.update()

      expect(wrapper.find(SELECTOR_COMMENT).prop('value'))
        .toEqual('')
    })
  })
})