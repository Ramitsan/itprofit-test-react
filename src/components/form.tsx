import React from "react";

export function Form() {
  return (
    <form action="" className="form" method="POST" autoComplete="off" noValidate>
        <div className="form__wrapper">
            <div className="input-wrapper input-wrapper__user-name">
                <label htmlFor="user-name" className="label">Имя: </label><input type="text" id="user-name" name="user-name" placeholder="Введите имя" required />
            </div>
            <div className="input-wrapper input-wrapper__user-email">
                <label htmlFor="user-email" className="label">Email: </label><input type="email" id="user-email" name="user-email" placeholder="Введите email" required />
            </div>
            <div className="input-wrapper input-wrapper__user-phone">
                <label htmlFor="user-phone" className="label">Телефон: </label><input type="text" id="user-phone" name="user-phone" placeholder="Введите телефон" required />
            </div>
            <div className="input-wrapper input-wrapper__user-message label">
                <label htmlFor="user-message">Сообщение: </label><textarea name="user-message" id="user-message" cols={30} rows={10} placeholder="Оставьте сообщение" required></textarea>
            </div>
            
            <button type="submit" className="btn btn--submit">Отправить</button>
        </div>
    </form>
  )
}