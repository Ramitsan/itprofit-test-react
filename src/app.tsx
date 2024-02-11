import React, { useEffect, useState } from "react";
import { Form } from "./components/form";
import { MessageSuccess } from "./components/messageSuccess";
import { MessageError } from "./components/messageError";
import { OpenModalButton } from "./components/OpenModalButton";
import { Modal } from "./components/Modal";
import { IFormData } from "./intefaces";
import { postRequest } from "./ajax";

export default function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [messageData, setMessageData] = useState('');
  const [showModal, setShowModal] = useState(false);

  const disableScroll = () => {
    document.body.classList.add('body-scroll');
  }
  
  const activateScroll = () => {
    document.body.classList.remove('body-scroll');
  }

  useEffect(() => {
    if(showModal) {
      disableScroll();
    } else {
      activateScroll();
    }
  }, [showModal]);

  const handleSubmit = (formData: IFormData) => {
    setMessageData('');
    postRequest(
      (data) => {
        
      },
      (data) => {
        
      })
  }

  const handleFormSuccess = (data: string) => {
    setShowSuccess(true);
    setShowError(false);
    setMessageData(data);
  }
  const handleFormError = (data: string) => {
    setShowSuccess(false);
    setShowError(true);
    setMessageData(data);
  }

  const handleFormRequest = () => {
    setShowSuccess(false);
    setShowError(false);
    setMessageData('');
  }

  const handleOpenModalClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <MessageSuccess show={showSuccess} data={messageData}/>
      <MessageError show={showError} data={messageData}/>
      <Form onSuccess={handleFormSuccess} onError={handleFormError} onRequest={handleFormRequest}/>
      <OpenModalButton onClick={handleOpenModalClick} />
      <Modal show={showModal} onClose={handleCloseModal}/>
    </>
  )
}