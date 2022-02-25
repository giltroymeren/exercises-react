import React from 'react';
import { getTree, MESSAGE_EMPTY_TREE } from '../common/utils';
import Tree from './Tree';
import { render, prettyDOM } from '@testing-library/react'

describe('Tree', () => {
  const labelText = 'checkbox'

  it('renders empty message when tree is empty', () => {
    const { getByText } = render(<Tree tree={[]} />);
    expect(getByText(MESSAGE_EMPTY_TREE)).toBeTruthy();
  });

  it('renders one checkbox when tree has one node', () => {
    const tree = [{ id: 0, name: 'aaa' }]
    const { container } = render(<Tree tree={tree} />);
    expect(container.getElementsByTagName('input').length).toBe(tree.length)
  });

  it('renders two child checkboxes when tree has two children nodes', () => {
    const tree = [
      { id: 0, name: 'aaa' },
      { id: 1, name: 'bbb', parent: 0 },
      { id: 2, name: 'ccc', parent: 0 },
    ]
    const { container } = render(<Tree tree={getTree(tree)} />);
    expect(container.getElementsByTagName('input').length).toBe(tree.length);
    expect(container.getElementsByClassName('level-0').length).toBe(1);
    expect(container.getElementsByClassName('level-1').length).toBe(2);
  });

  it('renders three parent checkboxes when tree has three nodes', () => {
    const tree = [
      { id: 0, name: 'aaa' },
      { id: 1, name: 'bbb' },
      { id: 2, name: 'ccc' },
    ]
    const { container } = render(<Tree tree={getTree(tree)} />);
    expect(container.getElementsByTagName('input').length).toBe(tree.length);
    expect(container.getElementsByClassName('level-0').length).toBe(tree.length);
  });

  it('renders five child checkboxes when each tree child has one child node', () => {
    const tree = [
      { id: 0, name: 'aaa' },
      { id: 1, name: 'bbb', parent: 0 },
      { id: 2, name: 'ccc', parent: 1 },
      { id: 3, name: 'ccc', parent: 2 },
      { id: 4, name: 'ccc', parent: 3 },
    ]
    const { container } = render(<Tree tree={getTree(tree)} />);
    expect(container.getElementsByTagName('input').length).toBe(tree.length)

    for (let i = 0; i < tree.length; i++)
      expect(container.getElementsByClassName(`level-${i}`).length).toBe(1)
  });
});
