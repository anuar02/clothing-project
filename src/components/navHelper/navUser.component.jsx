import { Link } from "react-router-dom";
import UserDropdown from "../user-dropdown/userDropdown.component";
import { useDispatch, useSelector } from "react-redux";
import { setUserCartOpen } from "../../store/user/user.reducer";
import {
  selectUserCartOpen,
  selectCurrentUser,
} from "../../store/user/user.selector";
const NavUser = () => {
  const dispatch = useDispatch();
  const userCartOpen = useSelector(selectUserCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const toogleUserCart = () => {
    dispatch(setUserCartOpen(!userCartOpen));
  };

  return (
    <>
      {currentUser && userCartOpen ? <UserDropdown /> : null}
      {currentUser && currentUser.displayName ? (
        <div>
          {
            <span className="nav-link" onClick={toogleUserCart}>
              {currentUser.displayName}
            </span>
          }
        </div>
      ) : currentUser ? (
        <div>
          {
            <span className="nav-link" onClick={toogleUserCart}>
              {currentUser.email}
            </span>
          }
        </div>
      ) : (
        <Link className="nav-link user " to="/auth">
          <>Sign in</>
        </Link>
      )}
    </>
  );
};

export default NavUser;
