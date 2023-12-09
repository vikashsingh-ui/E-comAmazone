import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchinput" />
          <SearchIcon className="header_searchicone" />
        </div>
        <div className="header_nav">
          <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="header_option">
              <span className="header_optionlineone">Hello {user?.email}</span>
              <span className="header_optionlinetwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionlineone">Returns</span>
              <span className="header_optionlinetwo">& Orders</span>
            </div>
          </Link>

          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionlineone">Your</span>
              <span className="header_optionlinetwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="header_optionbasket">
              <ShoppingBasketIcon />
              <span className="header_optionlinetwo header_basketcount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
