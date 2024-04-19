import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import GeneralConst from "../resource/General.js"
import UrlConst from "../resource/Url.js"
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const ModalDetailRecipe = ({
    recipeIdModal,
    titleModal,
    setIsShowModal = () => {}
  }) => {
  const [cookies, setCookie] = useCookies(['user']);

  const [show, setShow] = useState(true);
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const handleClose = () => {
    setShow(false)
    setIsShowModal(false)
  };

  useEffect(() => {
    if (recipeIdModal > 0){
      axios({
        method: 'get',
        url: UrlConst.GET_RECIPE_DETAIL,
        headers: {'Authorization': "Token " + cookies['token']},
        params: { recipe_id : recipeIdModal}
      }).then((res) => {
        setIngredients(res.data.ingredients)
        setInstructions(res.data.instructions)
        setIsLoading(false)
      })
    }
  }, [])

  return(
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{GeneralConst.DETAIL} {titleModal}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLoading && (
            <span>{GeneralConst.DETAIL_RECIPE_PLEASE_WAIT}</span>
          )}
          {ingredients && (
            ingredients.map((item) => {
              return (
                <>
                  <span>{item}</span><br />
                </>
              )
            })
          )}
          <br />
          <p>{instructions}</p>
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

export default ModalDetailRecipe