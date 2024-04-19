import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import GeneralConst from "../resource/General.js"
import UrlConst from "../resource/Url.js"
import axios from "axios";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

const ModalDeleteAccountConfirmation = ({
  setIsShowModalDeleteAccountConfirmation = () => {},
  setIsShowModalProcess = () => {},
  username
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false)
    setIsShowModalDeleteAccountConfirmation(false)
  };

  const deleteHandler = () => {
    setIsShowModalProcess(true);
    handleClose();

    axios({
      method: 'delete',
      url: UrlConst.GETPROFILE,
      headers: {'Authorization': "Token " + cookies['token']},
    }).then((res) => {
      setIsShowModalProcess(false);
      removeCookie('token' ,{path:'/'})
      navigate('/login');
    })
  }

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {GeneralConst.DELETE_ACCOUNT_CONFIRMATION_TITLE}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>          
          <p>{GeneralConst.DELETE_ACCOUNT_CONFIRMATION_TEXT
          .replace("{username}", username)}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="danger"
            onClick={deleteHandler}
          >
            {GeneralConst.DELETE_ACCOUNT_YES_BTN}
          </Button>
          <Button 
            variant="secondary"
            onClick={handleClose}
          >
            {GeneralConst.CLOSE}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalDeleteAccountConfirmation