import React from "react";

interface IMessageError {
  show: boolean,
  data: string
}

export function MessageError({show, data}: IMessageError) {
  return (
    <div className= {`message message--error ${show ? "message-show" : ""}`}>{data}</div>
  )
}