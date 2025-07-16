import React from 'react'
import './Hero.css'
import  small from '../../assets/small.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
         <img src={small} alt=""/>
         <h1><span>I'm Hajeerah Juma,</span> web developer based in Malawi.</h1>
         <p>I am a web developer and graphic designer from Malawi with experience</p>
         <div className="hero-action">
            <div className="hero-connect">
               <AnchorLink className='anchor-link' offset={50} href='#contact'>  Connect with me</AnchorLink> 
            </div>
            <div className="hero-resume">My resume</div>
         </div>
        </div>
    )
} 
export default Hero