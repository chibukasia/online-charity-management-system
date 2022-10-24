import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faComputer} from "@fortawesome/free-solid-svg-icons"

function HowItWorks() {
    return (
      <section className="page-section" id="how-it-works">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">How It Works</h2>
              </div>
              
                <div className="">
                <div className="">
                  <span className="fa-stack fa-4x">
                  {/* <FontAwesomeIcon icon={e.icon}></FontAwesomeIcon> */}
                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse" />
                  </span>
                  <h4 className="my-3">Title</h4>
                  <p className="text-muted">Some description</p>
                </div>
              </div>
              
            </div>
          </section>
    )
  }

  export default HowItWorks