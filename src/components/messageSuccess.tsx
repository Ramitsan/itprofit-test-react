import React from "react";

interface IMessageSuccess {
  show: boolean,
  data: string
}

export function MessageSuccess({show, data} : IMessageSuccess) {
  return (
    <div className= {`message message--success ${show ? "message-show" : ""}`}>{data}</div>
  )
}