import React from "react";

interface IOpenModalButtonProps {
  onClick: () => void
}

export function OpenModalButton({onClick} : IOpenModalButtonProps) {
  return (
    <div className="button-wrapper">
      <button className="btn btn--modal" onClick={onClick}>Открыть окно</button>
    </div>
  )
}

