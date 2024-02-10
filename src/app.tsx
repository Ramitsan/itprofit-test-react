import React from "react";
import { Form } from "./components/form";
import { MessageSuccess } from "./components/messageSuccess";
import { MessageError } from "./components/messageError";
import { OpenModalButton } from "./components/OpenModalButton";
import { Modal } from "./components/Modal";
import { IFormData } from "./intefaces";

export default function App() {
  const handleSubmit = (data: IFormData) => {
    
  }
  return (
    <>
      <MessageSuccess />
      <MessageError />
      <Form onSubmit={handleSubmit}/>
      <OpenModalButton /*onClick={handleOpenModalClick}*/ />
      <Modal />
    </>
  )
}