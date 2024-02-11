import React, { useState } from "react";
import { IFormData } from "../intefaces";
import {PhoneNumberUtil} from "google-libphonenumber";
import { postRequest } from "../ajax";
interface IFormProps {
  onSuccess: (data: string) => void;
  onError: (data: string) => void;
  onRequest?: (data: IFormData) => void;
}

export function Form({onSuccess, onError, onRequest} : IFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [isValidName, setValidName] = useState(true);
  const [isValidMail, setValidMail] = useState(true);
  const [isValidPhone, setValidPhone] = useState(true);
  const [isValidMessage, setValidMessage] = useState(true);

  const reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,5}$/i;
  const phoneUtil = PhoneNumberUtil.getInstance();

  const checkValidMail = () => {
    const valid = reg.test(email);    
    return valid;
  }
  
  const checkValidName = () => {
    const valid = !!name; 
    return valid;
  }
  
  const checkValidPhone = () => {
    let valid = false;
    try {
      const checkPhone = phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
      console.log(checkPhone);
      valid = checkPhone;
    }
    catch(e) {  
    }  
    return valid;
  }
  
  const checkValidMessage = () => {
    const valid = !!message;
    return valid;
  }

  const handleSubmit = (formData: IFormData) => {  
    onRequest?.(formData);
    postRequest(
      (data) => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        onSuccess(data.message);
      },
      (data) => {
        onError(data.message);
      })
  }

  return (
    <form action="" className="form" method="POST" autoComplete="off" noValidate 
    onSubmit={(evt) => {
      evt.preventDefault();
      setValidName(checkValidName());
      setValidMail(checkValidMail());
      setValidPhone(checkValidPhone());
      setValidMessage(checkValidMessage());

      const isValidForm = checkValidName() && checkValidMail() && checkValidPhone() && checkValidMessage();

      isValidForm && handleSubmit({name, email, phone, message});
    }}>
        <div className="form__wrapper">
            <div className="input-wrapper input-wrapper__user-name">
                <label htmlFor="user-name" className="label">Имя: </label>
                <input type="text" id="user-name" name="user-name" placeholder="Введите имя" value={name} required onChange={(evt) => setName(evt.target.value)} style={{border: !isValidName ? '2px solid #f00' : ''}}/>
                {!isValidName && <p>Введите имя</p>}
            </div>
            <div className="input-wrapper input-wrapper__user-email">
                <label htmlFor="user-email" className="label">Email: </label>
                <input type="email" id="user-email" name="user-email" placeholder="Введите email" value={email} required onChange={(evt) => setEmail(evt.target.value)} style={{border: !isValidMail ? '2px solid #f00' : ''}}/>
                {!isValidMail && <p>Некорректный email</p>}
            </div>
            <div className="input-wrapper input-wrapper__user-phone">
                <label htmlFor="user-phone" className="label">Телефон: </label>
                <input type="text" id="user-phone" name="user-phone" placeholder="Введите телефон" value={phone} required onChange={(evt) => setPhone(evt.target.value)} style={{border: !isValidPhone ? '2px solid #f00' : ''}}/>
                {!isValidPhone && <p>Некорректный номер</p>}
            </div>
            <div className="input-wrapper input-wrapper__user-message label">
                <label htmlFor="user-message">Сообщение: </label>
                <textarea name="user-message" id="user-message" cols={30} rows={10} placeholder="Оставьте сообщение" value={message} required onChange={(evt) => setMessage(evt.target.value)} style={{border: !isValidMessage ? '2px solid #f00' : ''}}></textarea>
                {!isValidMessage && <p>Напишите сообщение</p>}
            </div>
            
            <button type="submit" className="btn btn--submit">Отправить</button>
        </div>
    </form>
  )
}