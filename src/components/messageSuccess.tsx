import React from "react";

interface IMessageSuccessProps {
  show: boolean;
  data: string;
}

export function MessageSuccess({show, data} : IMessageSuccessProps) {
  return (
    <div className= {`message message--success ${show ? "message-show" : ""}`}>{data}</div>
  )
}