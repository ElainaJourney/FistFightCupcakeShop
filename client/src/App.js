import React, { useEffect } from "react";
import { GlobalStyle } from "./global.styles";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ArtPrompts from "./pages/prompts/prompts.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";
import Checkout from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import CommissionsForm from "./pages/commissions/commissions.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route
        exact
        path="/signin"
        render={() =>
          currentUser ? <Redirect to="/" /> : <SigninAndSignupPage />
        }
      />
      <Route exact path="/prompts" component={ArtPrompts} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/commissions" component={CommissionsForm} />
    </div>
  );
};

export default App;
