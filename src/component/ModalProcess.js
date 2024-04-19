import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const ModalProcess = ({
  setIsShowModalProcess = () => {},
  title,
  bodyText
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    setIsShowModalProcess(false)
  };

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{bodyText}</p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalProcess