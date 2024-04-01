import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/globalstyles.scss';
import { PageA } from './pages/PageA';
import { PageB } from './pages/PageB';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/pageA' element={<PageA/>}/>
          <Route path='/pageB' element={<PageB/>}/>
          <Route path='*' element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
