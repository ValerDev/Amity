import s from './App.scss';
import { Guide } from './pages/Guide/Guide';
import {Home} from './pages/Home/Home';
import { WeTransport } from './pages/WeTransport/WeTransport';

function App() {
  return (
    <div className={s.App}>
      <Home/>
      <Guide/>
      <WeTransport/>
    </div>
  );
}

export default App;
