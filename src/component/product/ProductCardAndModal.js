import React, {useState} from 'react'

import {Button, Card, Modal, Image} from 'react-bootstrap'

const ProductCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <Card style={{ height: '35rem' }}>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image fluid={true} src={props.image} />
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