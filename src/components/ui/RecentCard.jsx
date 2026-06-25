import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function RecentCard({job}) {
  return (
    <div className="recent__job">
        <div className="recent__job--wrapper">
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
