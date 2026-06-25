import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Browse from './pages/Browse';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [jobs,setJobs] = useState([]) 

  useEffect(() => {
    getJobs()
  },[])

  async function getJobs() {
    const {data} = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=50dce129&app_key=fa2501d32fdc779a3a027b2d50cf2d91&results_per_page=60`)
    setJobs(data.results)
    console.log(data.results)
  }

  return (
      <Router>
        <div className="App">
          <Nav/>
          <Routes>
            <Route path="/" element={<Homepage jobs={jobs}/>}></Route>
            <Route path="/browse" element={<Browse/>}></Route>
          </Routes>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
