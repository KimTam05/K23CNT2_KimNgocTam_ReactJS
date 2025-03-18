import KntCreateMockAPI from './components/KntCreateMockAPI';
import KntReactAPILocal from './components/KntReactAPILocal';
import KntReactMockAPI from './components/KntReactMockAPI';

function App() {
  return (
    <div className="App">
      <h1>React API - Kim Ngoc Tam</h1>
      <KntReactAPILocal/>
      <KntReactMockAPI/>
      <KntCreateMockAPI/>
    </div>
  );
}

export default App;
