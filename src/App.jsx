import s from './App.scss';
import { Footer } from './pages/Footer/Footer';
import { Guide } from './pages/Guide/Guide';
import { Help } from './pages/Help/Help';
import {Home} from './pages/Home/Home';
import { WeTransport } from './pages/WeTransport/WeTransport';
import { WhyAmity } from './pages/WhyAmity/WhyAmity';

function App() {
  return (
    <div className={s.App}>
      <Home/>
      <Guide/>
      <Help/>
      <WeTransport/>
      <WhyAmity/>
      <Footer/>
    </div>
  );
}

export default App;
