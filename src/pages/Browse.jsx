import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import JobCard from '../components/ui/JobCard'

export default function Browse({jobs}) {
  return (
    <section id="browse">
          <div class="container">
              <div class="row">
                  <div class="section__title">Browse Job Postings</div>
                  <div class="section__sub">Use the <b class="primary">filters</b> and <b class="primary">searchbar</b> below to find your <b class="primary">ideal job.</b></div>
                  <div class="browse__bar">
                      <div class="search_bar">
                          <input type="text" class="search_bar--input" placeholder="Search"/>
                          <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <select class="browse__select" onchange="sortJobs(event)">
                          <option disabled selected>Sort By</option>
                          <option value="A_TO_Z">A to Z</option>
                          <option value="Z_TO_A">Z to A</option>
                          <option value="NEWEST">Newest</option>
                          <option value="OLDEST">Oldest</option>
                      </select>
                      <select class="browse__select" onchange="filterJobs(event)">
                          <option disabled selected>Type</option>
                          <option value="FULL_TIME">Full Time</option>
                          <option value="PART_TIME">Part Time</option>
                          <option value="ANY">Any</option>
                      </select>
                  </div>
                  <div class="browse__jobs--wrapper">
                      <i class="fas fa-spinner"></i>
                      <div class="browse__jobs">
                        {jobs.length > 0 ? jobs.map((job, i) => <JobCard key={job.id} job={job}/>) : null}
                      </div>
                      <div class="browse__footer">
                          <div class="browse__footer--arrow" onclick="changePage(-1)"><FontAwesomeIcon icon={faArrowLeft}/></div>
                          <div class="browse__footer--number">0</div>
                          <div class="browse__footer--arrow" onclick="changePage(1)"><FontAwesomeIcon icon={faArrowRight}/></div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
