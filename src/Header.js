import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  const [{ basket }] = useStateValue();

  // get items quantity in basket
  let items = basket.reduce(
    (a, b) => parseInt(a, 10) + parseInt(b.quantity, 10), 0
  );
  return (
    <nav className="header">
      <div className='header__left'>
      </div>
      <div className='header__center'>
        <Link to="/store/frames" className="header__link">
          <p className="header__option">Sklep</p>
        </Link>

        <Link to="/" className="header__link">
          <img
            className="header__logo"
            src="https://rewardpointshome.files.wordpress.com/2019/11/hive_horizontal_logo_orange_rgb.d265ab1d7fbec8be02e8e7be66e9645f392e216d.png?w=816"
            alt=""
          />
        </Link>

        <Link to="/contact" className="header__link">
          <p className="header__option">Kontakt</p>
        </Link>
      </div>

      <div className="header__right">
        {items !== 0 ? (
          <Link to="/checkout" className="header__link">
            <div className="header__option">
              <ShoppingBasketIcon />
              <span className="header__basketCounter">{items}</span>
            </div>
          </Link>
        ) : (
            <Link className="header__link">
              <div className="header__option__basket">
                <ShoppingBasketIcon />
                <span className="header__basketCounter">{items}</span>
              </div>
            </Link>
          )}
      </div>
    </nav>
  );
}

export default Header;
