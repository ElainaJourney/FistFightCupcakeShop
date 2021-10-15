import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ArtPrompts from "./pages/prompts/prompts.component";
import ShopPage from "./pages/shop/shop.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-signup.component";
import Checkout from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SigninAndSignupPage />
            )
          }
        />
        <Route exact path="/prompts" component={ArtPrompts} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
