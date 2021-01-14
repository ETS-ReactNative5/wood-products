import React from "react";
import saveMessage from "./Firebase";
import "./Order.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Order() {
  const [{ basket }, dispatch] = useStateValue();

  // send order to database
  const sendOrder = () => {

    // get inputs values from form
    let firstName = getInputValue("firstName");
    let lastName = getInputValue("lastName");
    let email = getInputValue("email");
    let address = getInputValue("address");
    let city = getInputValue("city");
    let zipCode = getInputValue("zipCode");
    let phone = getInputValue("phone");
    let items = "";
    let price = 25;
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const dateCheck = (date) => {
      if (date < 10) return `0${date}`;
      else return date;
    }

    date = `${dateCheck(day)}.${dateCheck(month)}.${year}`;



    // add all items title and quantity to one string
    basket.map((i) => (items += i.title + ": " + i.quantity + "szt,"));

    // add prices
    basket.map((i) => (price += i.price));

    // clear basket after saving order
    dispatch({
      type: "CLEAR_BASKET",
    });

    // check that data in inputs is in correct format
    if ((firstName && lastName && email && address && city && zipCode && phone).length <= 0) {
      document.querySelector(".order__address__error").style.display = "block";
    } else if (email.indexOf("@") === -1) {
      document.querySelector("#email").style.border = "1px solid red";
      document.querySelector(".order__address__error").style.display = "none";
    } else if (zipCode.indexOf("-") === -1) {
      document.querySelector("#email").style.border = "1px solid gray";
      document.querySelector("#zipCode").style.border = "1px solid red";
    } else if (phone.length !== 9) {
      document.querySelector("#zipCode").style.border = "1px solid gray";
      document.querySelector("#phone").style.border = "1px solid red";
    } else {
      document.querySelector("#phone").style.border = "1px solid gray";
      document.querySelector(".order__alert").style.display = "flex";
      document.querySelector(".order__block").style.display = "block";

      // send order to database
      saveMessage(
        firstName,
        lastName,
        email,
        address,
        city,
        zipCode,
        phone,
        items,
        price,
        date,
      );
    }
  };

  // shorter way to get input value
  const getInputValue = (id) => {
    return document.getElementById(id).value;
  };

  return (
    <div className="order">
      <div className="order__block"></div>
      <div className="order__alert">
        <p>Twoje zamówienie zostało złożone!</p>
        <Link to="/store">
          <button className="order__alert__ok">OK</button>
        </Link>
      </div>
      <div className="order__address">
        <h1>Adres wysyłki</h1>
        <h3>Przesyłka zostanie dostarczona kurierem za pobraniem pod podany adres</h3>
        <hr className="order__separator" />
        <p className="order__address__error">Niektóre pola pozostały puste!</p>
        <label>Imię: </label>
        <input type="text" id="firstName" placeholder="Jan" />
        <label>Nazwisko: </label>
        <input type="text" id="lastName" placeholder="Kowalski" />
        <label>E-mail: </label>
        <input type="email" id="email" placeholder="jan@kowalski.com" />
        <label>Adres: </label>
        <input type="text" id="address" placeholder="Przemysłowa 5" />
        <label>Miasto: </label>
        <input type="text" id="city" placeholder="Warszawa" />
        <label>Kod pocztowy: </label>
        <input type="text" id="zipCode" placeholder="12-345" />
        <label>Numer telefonu: </label>
        <input type="tel" id="phone" placeholder="123456789" />
        <button onClick={sendOrder}>Zamawiam</button>
      </div>
    </div>
  );
}

export default Order;
