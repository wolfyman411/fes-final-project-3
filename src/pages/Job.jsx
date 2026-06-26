import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Job({job}) {

  let navigate = useNavigate()

  useEffect(() => {
    console.log(job)
  },[])

  function returnSalary(lowSalary,highSalary) {

    if (lowSalary === highSalary) {
        return "$"+lowSalary.toLocaleString()
    }
    else {
        return `$${lowSalary.toLocaleString()} - $${highSalary.toLocaleString()}`
    }
  }

  function returnJob() {
    if (job.contract_time === "full_time") {
        return "Full Time"
    }
    else {
        if (job.contract_type) {
            return "Part Time - Contract"
        }
        else {
            return "Part Time"
        }
    }
  }

  return (
    <>
    {job.title ? ( 
    <section id="jobpage">
        <div className="container">
            <div className="jobpage--wrapper">
                <div className="row">
                    <div className='jobpage__section section--right'>
                        <div className="jobpage__header--wrapper">
                            <div>
                                <a className="jobpage__back outline outline--secondary clickable" onClick={() => navigate("/browse")}>
                                    ← Back
                                </a>
                                <div className="jobpage__title">
                                    {job.title}
                                </div>
                                <div className="jobpage__job-id">
                                    {job.id}
                                </div>
                            </div>
                        </div>
                        <div className="jobpage__info--wrapper">
                            <div className="jobpage__company">{job.company.display_name}</div>
                            <div className="jobpage__location">{job.location.display_name}</div>
                            <div className="jobpage__salary">{returnSalary(job.salary_min,job.salary_max)}</div>
                            <div className="jobpage__contract">{returnJob()}</div>
                        </div>
                        <div className="jobpage__desc">
                            {job.description}
                        </div>
                        <a className="jobpage__link outline outline--secondary clickable" href={job.redirect_url} target='_blank'>Website</a>
                    </div>
                    <div className='jobpage__section section--left'>
                        <div className="jobpage__logo">
                            {job.company.display_name[0]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>) :
    (navigate("/browse"))
    }
    </>
  )
}
