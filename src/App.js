import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import Landing from "./components/landing/landing.component";
import { useEffect } from "react";
import {
  createUserDocFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { MetaTags } from "react-meta-tags";
import { selectCategoriesMap } from "./store/categories/categories.selector";

function App() {
  return (
    <>
      <MetaTags>
        <title>Panache</title>
      </MetaTags>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Landing />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
