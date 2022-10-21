import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faComputer} from "@fortawesome/free-solid-svg-icons"
import Data from "../HowItWorks_data"
//This is the how it works section and we have mapped over tghe single component


function HowItWorks() {
  return (
    <section className="page-section" id="how-it-works">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">How It Works</h2>
            </div>
            {Data.map((e)=>{
              return(
              <div className="">
              <div className="">
                <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={e.icon}></FontAwesomeIcon>
                  <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">{e.title}</h4>
                <p className="text-muted">{e.description}</p>
              </div>
            </div>
              )
            }

            )} 
            
          </div>
        </section>
  )
}

export default HowItWorks