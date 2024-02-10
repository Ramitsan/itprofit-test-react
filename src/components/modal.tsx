import React from "react";

export function Modal() {
  return (
    <div className="modal">
        <div className="modal__wrapper">
            <p className="modal__content">Модальное окно</p>   
            <button className="btn btn--modal-close" type="button">Закрыть</button>          
        </div>             
    </div>
  )
}