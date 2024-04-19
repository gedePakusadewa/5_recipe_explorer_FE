import GeneralConst from "../resource/General.js"

const Card = ({
    title, 
    imageUrl, 
    isShowBtnFavorite, 
    id,
    setIsShowModal = () =>{},
    setRecipeIdModal = () => {},
    setTitleModal = () => {},
    favoriteHandler = () => {}
  }) => {

  return(
    <>
      <div className="card-food">
        <img
          src={imageUrl}
          className="card-img"
        />
        <div className="title-card">{title}</div>
        {isShowBtnFavorite === true && (
          <>
            <button
              className="btn-cust btn-card-favorite"
              onClick={(e) => {
                favoriteHandler(id, title, imageUrl)
                setTitleModal(title)
              }}
            >
              {GeneralConst.FAVORITE}
            </button>
            <br />
          </>
        )}
        <button
          className="btn-cust btn-card-detail"
          onClick={(e) => {
            setIsShowModal(true)
            setRecipeIdModal(id)
            setTitleModal(title)
          }}
        >
          {GeneralConst.DETAIL}
        </button>
      </div>
    </>
  )
}

export default Card