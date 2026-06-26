import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import JobCard from '../components/ui/JobCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Browse({setSelectedJob}) {

  const {search} = useParams()
  const [newJobs,setNewJobs] = useState([])
  const [sortedJobs,setSortedJobs] = useState(newJobs)
  const [searchTerm,setSearchTerm] = useState(search)
  const [sortType,setSortType] = useState("")
  const [jobType,setJobType] = useState("")
  const [jobAmount,setJobAmount] = useState(6)
  const [pageNumber,setPageNumber] = useState(0)

  useEffect(() => {
    getNewJobs()
  },[])

  useEffect(() => {
    const newSearchTerm = search || ''
    setSearchTerm(newSearchTerm);
    getNewJobs(newSearchTerm)
  }, [search]);

  useEffect(() => {
    sortNewJobs()
  }, [newJobs,sortType,jobType])

  useEffect(() => {
    setPageNumber(0)
  }, [jobAmount])

  function sortNewJobs() {
    let result = [...newJobs]

    // Get the job type
    if (jobType === "FULL_TIME") {
        result = result.filter((job) => job.contract_time === "full_time")
    }
    else if (jobType === "PART_TIME") {
        result = result.filter((job) => job.contract_time === "part_time")
    }

    // Sort the job
    if (sortType === "A_TO_Z") {
        result = result.sort(function(a,b) {
            if (a.title < b.title) return -1
            else if (a.title > b.title) return 1
            else return 0
        })
    }
    else if (sortType === "Z_TO_A") {
        result = result.sort(function(a,b) {
            if (a.title < b.title) return 1
            else if (a.title > b.title) return -1
            else return 0
        })
    }
    else if (sortType === "NEWEST") {
        result.sort((a,b) => Date.parse(b.created) - Date.parse(a.created))
    }
    else if (sortType === "OLDEST") {
        result.sort((a,b) => Date.parse(a.created) - Date.parse(b.created))
    }
    setSortedJobs(result)
  }

  async function getNewJobs(term=searchTerm) {
    setSortedJobs([])
    const {data} = await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=50dce129&app_key=fa2501d32fdc779a3a027b2d50cf2d91&results_per_page=1000&what=${term}`)
    setNewJobs(data.results)
    setSortedJobs(newJobs)
  }

  function changePage(val) {
    // Prevent from going to far backward
    if (pageNumber <= 0 && val < 0) {
      return;
    }
    // Stop going forward if at end
    if (sortedJobs.slice(pageNumber*jobAmount, (pageNumber*jobAmount)+jobAmount).length % jobAmount !== 0 && val > 0) {
      return;
    }

    setPageNumber(pageNumber+val);
  }

  return (
    <section id="browse">
          <div className="container">
              <div className="row">
                  <div className="section__title">Browse Job Postings</div>
                  <div className="section__sub">Use the <b className="primary">filters</b> and <b className="primary">searchbar</b> below to find your <b className="primary">ideal job.</b></div>
                  <div className="browse__bar">
                      <div className="search_bar">
                          <input type="text" className="search_bar--input" placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} onKeyPress={(event) => event.key === 'Enter' && getNewJobs()}/>
                          <FontAwesomeIcon icon={faSearch} onClick={() => getNewJobs()} className='clickable'/>
                      </div>
                      <div className="browse__selects">
                        <select className="browse__select" onChange={(event) => {setSortType(event.target.value)}} defaultValue="DEFAULT">
                          <option disabled value="DEFAULT">Sort By</option>
                          <option value="A_TO_Z">A to Z</option>
                          <option value="Z_TO_A">Z to A</option>
                          <option value="NEWEST">Newest</option>
                          <option value="OLDEST">Oldest</option>
                        </select>
                        <select className="browse__select" onChange={(event) => setJobType(event.target.value)} defaultValue="DEFAULT">
                            <option disabled value="DEFAULT">Type</option>
                            <option value="FULL_TIME">Full Time</option>
                            <option value="PART_TIME">Part Time</option>
                            <option value="ANY">Any</option>
                        </select>
                        <select className="browse__select" onChange={(event) => setJobAmount(parseInt(event.target.value))} defaultValue="DEFAULT">
                            <option disabled value="DEFAULT">Items Per Search</option>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="24">24</option>
                        </select>
                      </div>
                  </div>
                  <div className="browse__jobs--wrapper">
                      <div className="browse__jobs">
                        {sortedJobs.length > 0 ? 
                            sortedJobs.slice(pageNumber*jobAmount, (pageNumber*jobAmount)+jobAmount).map((job, i) => <JobCard key={job.id} job={job} skeleton={false} setSelectedJob={setSelectedJob}/>) 
                            : 
                            new Array(jobAmount).fill(0).map((_, i) => <JobCard skeleton={true} key={i}/>)
                        }
                      </div>
                      <div className="browse__footer">
                          <div className="browse__footer--arrow" onClick={() => changePage(-1)}><FontAwesomeIcon icon={faArrowLeft}/></div>
                          <div className="browse__footer--number">{pageNumber}</div>
                          <div className="browse__footer--arrow" onClick={() => changePage(1)}><FontAwesomeIcon icon={faArrowRight}/></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
