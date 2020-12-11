import React from "react";
import saveMessage from "./Firebase";
import "./Order.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Order() {
  const [{ basket }, dispatch] = useStateValue();

  const sendOrder = () => {
    var firstName = getInputValue("firstName");
    var lastName = getInputValue("lastName");
    var email = getInputValue("email");
    var address = getInputValue("address");
    var city = getInputValue("city");
    var zipCode = getInputValue("zipCode");
    var phone = getInputValue("phone");
    var items = "";
    var price = 25;
    basket.map((i) => (items += i.title + ": " + i.quantity + "szt,"));
    basket.map((i) => (price += i.price));

    dispatch({
      type: "CLEAR_BASKET",
    });

    if (
      (firstName && lastName && email && address && city && zipCode && phone)
        .length <= 0
    ) {
      document.querySelector(".order__address__error").style.display =
        "block";
    } else if (email.indexOf("@") === -1) {
      document.querySelector("#email").style.border = "1px solid red";
      document.querySelector(".order__address__error").style.display =
        "none";
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
      saveMessage(
        firstName,
        lastName,
        email,
        address,
        city,
        zipCode,
        phone,
        items,
        price
      );
    }
  };

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
