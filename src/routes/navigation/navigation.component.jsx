import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cartIcon.component";
import CartDropdown from "../../components/cart-dropdown/cartDropdown.component";
import NavUser from "../../components/navHelper/navUser.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <div className="main-content">
        <div className="navigation">
          <Link className="logo-container" to="/">
            <span>Panache</span>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" id="links" to="/">
              <span>Home</span>
            </Link>
            <Link className="nav-link" id="links" to="/shop">
              <span>Shop</span>
            </Link>
            <NavUser />
            <CartIcon />
          </div>
          {isCartOpen ? <CartDropdown /> : null}
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
};
export default Navigation;
