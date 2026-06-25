import React from 'react'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'
import header_img from '../assets/header_img.svg'
import recent_img from '../assets/recent_img.svg'
import RecentCard from '../components/ui/RecentCard'

export default function Homepage() {

  let navigate = useNavigate()

  return (
    <>
        <section>
            <header>
                <div class="container">
                    <div class="row">
                        <h1>Job Lurker</h1>
                        <h2><b class="primary">Looking for employment?</b> Speed up the process by using <b class="primary">Job Lurker</b>, and find your <b class="primary">next role!</b></h2>
                        <img src={header_img} alt="" class="header__img"/>
                    </div>
                </div>
            </header>
        </section>
        <section id="recent">
            <div class="container">
                <div class="row">
                    <div class="section__info">
                        <div class="section__title">Recent Job Postings</div>
                        <div class="section__sub">Have a look at some <b class="primary">recent</b> job postings!</div>
                        <a class="btn" onClick={() => navigate("/browse")}>Click Here To Browse!</a>
                        <img src={recent_img} alt="" class="header__img"/>
                    </div>
                    <div class="recent__jobs--wrapper">
                        <div class="recent__jobs--blur"></div>
                        <div class="recent__jobs">
                            {new Array(6).fill(0).map((_, i) => <RecentCard/>)}
                        </div>
                        <div class="recent__jobs" aria-hidden="">
                            {new Array(6).fill(0).map((_, i) => <RecentCard/>)}
                        </div>
                        <div class="recent__jobs--blur"></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
