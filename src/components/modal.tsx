import React from "react";

interface IModalProps {
  show: boolean;
  onClose: () => void;
}

export function Modal({show, onClose}: IModalProps) {
  return (
    <div className={`modal ${show ? "modal--show" : ""}`}>
        <div className="modal__wrapper">
            <p className="modal__content">Модальное окно</p>   
            <button className="btn btn--modal-close" type="button" onClick={onClose}>Закрыть</button>          
        </div>             
    </div>
  )
}