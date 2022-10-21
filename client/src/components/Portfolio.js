import React from 'react'
import Containers from '../containers_data'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button';
import PortfolioModal from './PortfolioModal';

const Portfolio = () => {
  return (
    <section className="page-section bg-light" id="portfolio">
    <div className="container">
      <div className="text-center">
        <h2 className="section-heading text-uppercase">Featured Fundraisers</h2>
      </div>
      <div className="row">

        {Containers.map((container)=>{

          return(
            <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 1*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src={container.picture} alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{container.title}</div>
                <div className="portfolio-caption-subheading text-muted">{container.description}</div>
                <PortfolioModal  container = {container}/>
              
                <ProgressBar now={container.now} label={`${container.now}%`} />
                <div className='donate-button'>
                <Button variant="success">Donate</Button> 
                </div> 
                

              </div>
            </div>
          </div>
          )
        }

        )}
        
        
        
      </div>
    </div>
  </section>
  )
}

export default Portfolio