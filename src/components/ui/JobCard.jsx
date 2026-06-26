import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function JobCard({job,skeleton,setSelectedJob}) {

  let navigate = useNavigate()

  function defaultHTML() {
    return (
        <div className="browse__job clickable" onClick={() => {setSelectedJob(job); navigate("/job")}}>
            <div className="browse__job--wrapper">
                <div className="company__logo--wrapper">
                    <div className="job__logo">{job.company.display_name[0]}</div>
                    <div className="job__title--wrapper">
                        <div className="job__company">{job.company.display_name}</div>
                        <div className="job__title">{job.title}</div>
                    </div>
                </div>
                <div className="job__desc">
                    <div className="job__info">{job.description}</div>
                </div>
                <div className="job__footer">
                    <div className="job__location">{job.location.display_name}</div>
                    <div className="job__date">{job.created.slice(0,10)}</div>
                    <a href={job.redirect_url} target="_blank" className="job__link"><FontAwesomeIcon icon={faGlobe}/></a>
                </div>
            </div>
        </div>
    )
  }

  function skeletonHTML() {
    return (
        <div className="browse__job skeleton">
            <div className="browse__job--wrapper">
                <div className="company__logo--wrapper">
                    <div className="job__logo"></div>
                    <div className="job__title--wrapper skeleton">
                        <div className="job__company"></div>
                        <div className="job__title"></div>
                    </div>
                </div>
                <div className="job__desc skeleton">
                    <div className="job__info"></div>
                </div>
                <div className="job__footer">
                    <div className="job__location"></div>
                    <div className="job__date"></div>
                </div>
            </div>
        </div>
    )
  }
  return (
    <>
        {skeleton ? skeletonHTML() : defaultHTML()}
    </>
  )
}
