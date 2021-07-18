import './App.css';
import BrandImage from './components/brand-image/brand-image';
import BrandLogo from './components/brand-logo/brand-logo';
import Brand from './components/brand/brand';
import Colors from './components/colors/colors';
import CoreValues from './components/core-values/core-values';
import Essence from './components/essence/essence';
import Header from './components/header/header';
import TheOutlaw from './components/the-outlaw/the-outlaw';
import Typography from './components/typography/typography';
import WhoWeAre from './components/who-we-are/who-we-are';



function App() {
  return <div className="App">
        {/* <Brand /> */}
        <Header />
        <Essence />
        <WhoWeAre />
        <CoreValues />
        <TheOutlaw />
        <BrandLogo />
        <Colors />
        <Typography />
        <BrandImage />
      </div>

}

export default App;
