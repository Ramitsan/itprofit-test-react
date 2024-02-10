import React, { useState } from "react";
import { IFormData } from "../intefaces";

interface IFormProps {
  onSubmit: (data: IFormData) => void;
}

export function Form({onSubmit} : IFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form action="" className="form" method="POST" autoComplete="off" noValidate 
    onSubmit={(evt) => {
      evt.preventDefault();
      onSubmit({name, email, phone, message})
    }}>
        <div className="form__wrapper">
            <div className="input-wrapper input-wrapper__user-name">
                <label htmlFor="user-name" className="label">Имя: </label>
                <input type="text" id="user-name" name="user-name" placeholder="Введите имя" required onChange={(evt) => setName(evt.target.value)}/>
            </div>
            <div className="input-wrapper input-wrapper__user-email">
                <label htmlFor="user-email" className="label">Email: </label>
                <input type="email" id="user-email" name="user-email" placeholder="Введите email" required onChange={(evt) => setEmail(evt.target.value)}/>
            </div>
            <div className="input-wrapper input-wrapper__user-phone">
                <label htmlFor="user-phone" className="label">Телефон: </label>
                <input type="text" id="user-phone" name="user-phone" placeholder="Введите телефон" required onChange={(evt) => setPhone(evt.target.value)}/>
            </div>
            <div className="input-wrapper input-wrapper__user-message label">
                <label htmlFor="user-message">Сообщение: </label>
                <textarea name="user-message" id="user-message" cols={30} rows={10} placeholder="Оставьте сообщение" required onChange={(evt) => setMessage(evt.target.value)}></textarea>
            </div>
            
            <button type="submit" className="btn btn--submit">Отправить</button>
        </div>
    </form>
  )
}