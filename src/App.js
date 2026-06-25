import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Browse from './pages/Browse';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/browse" element={<Browse/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
