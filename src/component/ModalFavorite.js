import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GeneralConst from "../resource/General.js"
import { useState } from 'react';

const ModalFavorite = ({
  setIsShowModalFavorite = () => {},
  titleRecipe
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    setIsShowModalFavorite(false)
  };

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{GeneralConst.FAVORITE}</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          <p>{GeneralConst.FAVORITE_CONFIRMATION.replace("{titleRecipe}", titleRecipe)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {GeneralConst.CLOSE}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalFavorite