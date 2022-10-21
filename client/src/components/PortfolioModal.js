import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PortfolioModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(props)
  return (
    <>
    <div className='portfolio-modal'>
    <Button variant="primary" onClick={handleShow}>
        Continue Reading
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.container.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.container.fullDescription}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
      
    </>
  );
}

export default PortfolioModal 