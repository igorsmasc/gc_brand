import './App.css';
import Brand from './components/brand/brand';
import CoreValues from './components/core-values/core-values';
import Essence from './components/essence/essence';
import TheOutlaw from './components/the-outlaw/the-outlaw';
import WhoWeAre from './components/who-we-are/who-we-are';



function App() {
  return <div className="App">
        {/* <Brand /> */}
        <Essence />
        <WhoWeAre />
        <CoreValues />
        <TheOutlaw />
      </div>

}

export default App;
