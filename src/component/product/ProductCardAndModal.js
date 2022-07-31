import React, {useState} from 'react'

import {Button, Card, Modal, Image} from 'react-bootstrap'

const ProductCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <Card style={{ height: '40rem' }}>
        <Card.Img variant="top" src={props.image} onClick={handleShow} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {props.price}
        </Card.Footer>
      </Card>

      <Modal styles={{width: '45rem'}}show={show} onHide={handleClose} dialogClassName="modal-450w">
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image fluid={true} src={props.image} style={{width: '450px'}}/>
          {props.description}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProductCard