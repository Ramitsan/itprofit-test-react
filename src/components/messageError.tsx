import React from "react";

interface IMessageErrorProps {
  show: boolean,
  data: string
}

export function MessageError({show, data}: IMessageErrorProps) {
  return (
    <div className= {`message message--error ${show ? "message-show" : ""}`}>{data}</div>
  )
}