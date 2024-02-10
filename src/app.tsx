import React from "react";
import { Form } from "./components/form";
import { MessageSuccess } from "./components/messageSuccess";
import { MessageError } from "./components/messageError";
import { OpenModalButton } from "./components/OpenModalButton";
import { Modal } from "./components/Modal";

export default function App() {
  return (
    <>
      <MessageSuccess />
      <MessageError />
      <Form />
      <OpenModalButton />
      <Modal />
    </>
  )
}