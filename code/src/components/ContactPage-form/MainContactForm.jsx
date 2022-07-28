import React from "react";

// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

function MainContactForm(props) {
  return (
    <div className="mainContactForm">
      <div className="mainContactForm__container">
        <div className="mainContactForm__inner-map">
          <h3>{props.mainContactFormLocationTitle}</h3>
          <div className="mainContactForm__map"></div>
        </div>
        <div className="mainContactForm__inner-form">
          <h3>{props.mainContactFormFormTitle}</h3>
          <form className="mainContactForm__form">
            <select id="query" name="Query">
              <option value="generalEnquiry">Общий запрос</option>
              <option value="investment">Инвестиция</option>
              <option value="customerService">Обслуживание клиентов</option>
            </select>
            <input type="text" required placeholder="ФИО" />
            <input
              type="email"
              required
              placeholder="Ваш адрес электронной почты:"
            />
            <textarea
              name=""
              cols="30"
              rows="10"
              placeholder="Ваше сообщение:"
            ></textarea>
            <input type="submit" value="Отправить" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainContactForm;
