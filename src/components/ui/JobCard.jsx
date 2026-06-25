import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function JobCard() {
  return (
    <div class="browse__job">
        <div class="browse__job--wrapper">
            <div class="company__logo--wrapper">
                <div class="job__logo">1</div>
                <div class="job__title--wrapper">
                    <div class="job__company">Job Company</div>
                    <div class="job__title">Job Title</div>
                </div>
            </div>
            <div class="job__desc">
                <div class="job__info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt non vero, veniam voluptatem eligendi similique sapiente impedit voluptate architecto quidem? Eos doloremque consequuntur est cum temporibus veniam itaque ex.</div>
            </div>
            <div class="job__footer">
                <div class="job__location">Job Location</div>
                <div class="job__date">Posted</div>
                <a href="#" target="_blank" class="job__link"><FontAwesomeIcon icon={faGlobe}/></a>
            </div>
        </div>
    </div>
  )
}
