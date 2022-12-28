import React, { Component } from 'react'
import './CSS/NetflixLandPage.css'
import Logo from './SubComponents/Logo'
import Signin from './Sigin'
import LangBtn from './SubComponents/LangBtn'
import UpText from './SubComponents/UpText'
import MidText from './SubComponents/MidText'
import LowText from './SubComponents/LowText'
import MailBox from './SubComponents/MailBox'
import LeftText from './SubComponents/LeftText'

export class NetflixLandPage extends Component {
  render() {
    return (
      <>
        <div>
            <div className='Startpage-container'>
                <div className='topbar-container'>
                    <div className='logo'><Logo/></div>
                    <div className='signinandlang-container'>
                      <div className='langtxt'><LangBtn/></div>
                      <div className='signin'><Signin/></div>
                    </div>
                </div>
                <div className='container02'>
                  <div><UpText text="Unlimited movies, TV"/></div>
                  <div><UpText text="shows and more."/></div>
                  <div><MidText text="Watch anywhere. Cancel anytime."/></div>
                  <div><LowText text="Ready to watch? Enter your email to create or restart your membership."/></div>
                  <div className='container021'>
                      <div className='mail-container'><MailBox/></div>
                      <div className='getstarted'>Get started</div>
                  </div>
                </div>
            </div>
            <LeftText 
      large_text = "Enjoy on your TV." 
      small_text1="Watch on smart TVs, PlayStation, Xbox," 
      small_text2="Chrome cast, Apple TV, Blu-ray players and"
      small_text3="more."
      img = "Kathir"
    />
        </div>
      </>
    )
  }
}

export default NetflixLandPage