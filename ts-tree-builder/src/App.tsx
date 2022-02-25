import React from 'react';
import logo from './logo.svg';
import nodes from './nodes';
import Tree from './components/Tree';
import { getTree } from './common/utils';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Tree-Selector</h2>
      </header>
      <main className="App-main">
        <h1>Node Picker Assignment</h1>

        <Tree tree={getTree(nodes)} />
      </main>
    </div>
  );
};

export default App;
