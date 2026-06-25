import React from 'react'

export default function RecentCard() {
  return (
    <div class="recent__job clickable">
        <div class="recent__job--wrapper">
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
                <a href="#" target="_blank" class="job__link"><i class="fa-solid fa-globe"></i></a>
            </div>
        </div>
    </div>
  )
}
