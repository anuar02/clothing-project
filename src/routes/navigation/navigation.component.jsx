import { Outlet, Link } from "react-router-dom";
import { Fragment, useEffect } from "react";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cartIcon.component";
import CartDropdown from "../../components/cart-dropdown/cartDropdown.component";
import NavUser from "../../components/navHelper/navUser.component";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setCategories } from "../../store/categories/categories.reducer";
import {
  createUserDocFromAuth,
  getCategoriesAndDocuments,
  onAuthStateChangedListener,
} from "../../utils/firebase/firebase.utils";
import { Dropdown, Navbar } from "flowbite-react";
import { setCurrentUser } from "../../store/user/user.reducer";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  });

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
  });

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
