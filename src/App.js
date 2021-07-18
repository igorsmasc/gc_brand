import './App.css';
import Brand from './components/brand/brand';
import CoreValues from './components/core-values/core-values';
import Essence from './components/essence/essence';
import WhoWeAre from './components/who-we-are/who-we-are';



function App() {
  return <div className="App">
        {/* <Brand /> */}
        <Essence />
        <WhoWeAre />
        <CoreValues />
      </div>

}

export default App;
