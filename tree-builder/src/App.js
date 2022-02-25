import './App.css';
import TreeWrapper from './components/TreeWrapper';
import { TreeProvider } from './context/TreeContext';

function App() {

  return (
    <TreeProvider>
      <TreeWrapper />
    </TreeProvider>
  )
}

export default App;
