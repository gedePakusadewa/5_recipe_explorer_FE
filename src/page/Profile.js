import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import GeneralConst from "../resource/General.js"
import UrlConst from "../resource/Url.js"
import axios from "axios";
import ModalDeleteAccountConfirmation from "../component/ModalDeleteAccountConfirmation.js";
import ModalProcess from "../component/ModalProcess.js";
import "../style.css";

const Profile = () => {
  const [cookies, setCookie] = useCookies(['user']);
  
  const [form, setForm] = useState({
    username:"",
    email:""
  });
  const [isShowModalDeleteAccountConfirmation,
    setIsShowModalDeleteAccountConfirmation] = useState(false);
  const [isShowModalProcess, setIsShowModalProcess] = useState(false);
  const [isUserDemo, setIsUserDemo] = useState(false);

  useEffect(() => {
    getProfile();
    checkIsUserDemo();
  }, []);

  const getProfile = async () => {    
    axios({
      method: 'get',
      url: UrlConst.GETPROFILE,
      headers: {'Authorization': "Token " + cookies['token']},
    }).then((res) => {
      setForm({
        username: res.data.user.username,
        email: res.data.user.email
      })
    })
  };

  const onSubmit = () => {    
    axios({
      method: 'post',
      url: UrlConst.GETPROFILE,
      data: {
        username:form.username,
        email:form.email
      },
      headers: {'Authorization': "Token " + cookies['token']},
    })
  };

  const updateForm = (e) =>{
    setForm(previousState =>{
      return { 
        ...previousState,
        [e.target.name]:e.target.value
      }
    });
  }

  const displayModalDelete = () => {
    setIsShowModalDeleteAccountConfirmation(true)
  }

  const checkIsUserDemo = () => {
    axios({
      method: 'get',
      url: UrlConst.GET_IS_USER_DEMO,
      headers: {'Authorization': "Token " + cookies['token']},
    }).
    then((res) => {
      setIsUserDemo(res.data.data)
    }).
    catch((res) =>{
      console.log(res);
    })
  }

  return(
    <>
      <div className="container-profile">
        <div className="wrapper-profile">
          <div className="title-profile">{GeneralConst.PROFILE}</div>
          <label htmlFor="title">{GeneralConst.USERNAME}</label><br />
          <input 
            type="input"
            defaultValue={form.username}
            name="username"
            onChange={
              (e) => {updateForm(e)}
            }
          />
          <label htmlFor="title">{GeneralConst.EMAIL}</label><br />
          <input
            type="email"
            name="email"
            defaultValue={form.email}
            onChange={
              (e) => {updateForm(e)}
            }
          />
          <button
            className="btn-cust btn-update-profile"
            onClick={onSubmit}
            disabled={"disabled"}
          >
            {GeneralConst.UPDATE}
          </button>

          <button
            className="btn-cust btn-delete-profile"
            onClick={displayModalDelete}
            disabled={isUserDemo ? "disabled" : ""}
          >
            {GeneralConst.DELETE_ACCOUNT}
          </button>
        </div>
      </div>
      {isShowModalDeleteAccountConfirmation && (
        <ModalDeleteAccountConfirmation
          setIsShowModalDeleteAccountConfirmation={setIsShowModalDeleteAccountConfirmation}
          setIsShowModalProcess={setIsShowModalProcess}
          username={form.username}
        />
      )}
      {isShowModalProcess && (
        <ModalProcess
          setIsShowModalProcess={setIsShowModalProcess}
          title={GeneralConst.DELETE_PROCESS_TITLE}
          bodyText={GeneralConst.DELETE_PROCESS_TEXT}
        />
      )}
    </>
  )
}

export default Profile