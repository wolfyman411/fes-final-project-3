import React from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import header_img from '../assets/header_img.svg'
import recent_img from '../assets/recent_img.svg'
import RecentCard from '../components/ui/RecentCard'

export default function Homepage({jobs}) {

  let navigate = useNavigate()

  const getRecentJobs = () => {
    const recentJobs = jobs.sort((a,b) => Date.parse(b.created) - Date.parse(a.created)).slice(0,8)
    return recentJobs
  }

  return (
    <>
        <section>
            <header>
                <div className="container">
                    <div className="row">
                        <h1>Job Lurker</h1>
                        <h2><b className="primary">Looking for employment?</b> Speed up the process by using <b className="primary">Job Lurker</b>, and find your <b className="primary">next role!</b></h2>
                        <img src={header_img} alt="" className="header__img"/>
                    </div>
                </div>
            </header>
        </section>
        <section id="recent">
            <div className="container">
                <div className="row">
                    <div className="section__info">
                        <div className="section__title">Recent Job Postings</div>
                        <div className="section__sub">Have a look at some <b className="primary">recent</b> job postings!</div>
                        <a className="btn" onClick={() => navigate("/browse")}>Click Here To Browse!</a>
                        <img src={recent_img} alt="" className="header__img"/>
                    </div>
                    <div className="recent__jobs--wrapper">
                        <div className="recent__jobs--blur"></div>
                        <div className="recent__jobs">
                            {getRecentJobs().length > 0 ? 
                                getRecentJobs().map((job) => <RecentCard job={job} key={job.id}/>)
                                : 
                                new Array(8).fill(0).map((_, i) => <RecentCard skeleton={true} key={i}/>)
                            }
                        </div>
                        <div className="recent__jobs" aria-hidden={true}>
                            {getRecentJobs().length > 0 ? 
                                getRecentJobs().map((job) => <RecentCard job={job} key={job.id}/>)
                                : 
                                new Array(8).fill(0).map((_, i) => <RecentCard skeleton={true} key={i}/>)
                            }
                        </div>
                        <div className="recent__jobs--blur"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
