import { useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import Card from "../component/Card.js";
import UrlConst from "../resource/Url.js"
import GeneralConst from "../resource/General.js"
import ModalDetailRecipe from "../component/ModalDetailRecipe.js";
import axios from "axios";

const Favorite = () => {
  const [cookies, setCookie] = useCookies(['user']);

  const [favoriteData, setFavoriteData] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const [recipeIdModal, setRecipeIdModal] = useState(0)
  const [titleModal, setTitleModal] = useState('')
  
  useEffect(() =>{
    getFavorite()
  }, [])

  const getFavorite = async () => {
    axios({
      method: 'get',
      url: UrlConst.GETFAVORITE,
      headers: {'Authorization': "Token " + cookies['token']}
    }).then((res) => {
      setFavoriteData(res.data)
    })
  }

  return(
    <>
      <div className="title-page-favorite">{GeneralConst.FAVORITE_TITLE}</div>
      <div className="wrapper-favorite">
        {favoriteData === null || favoriteData.length === 0 && (
          <p>{GeneralConst.EMPTY_FAVORITE_MESSAGE}</p>
        )}
        {favoriteData !== null && (favoriteData.map((item, idx) => {
          return (
            <Card 
              title={item.title}
              imageUrl={item.imageURL}
              isShowBtnFavorite={false}
              id={item.id}
              setIsShowModal={setIsShowModal}
              setRecipeIdModal={setRecipeIdModal}
              setTitleModal={setTitleModal}
            />
          )
        }))}
      </div>      
      {isShowModal && (
        <ModalDetailRecipe
          recipeIdModal={recipeIdModal}
          titleModal={titleModal}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  )
}

export default Favorite