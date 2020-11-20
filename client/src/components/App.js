import React, { Component } from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage/LandingPage";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { fetchUser } from "../actions";
import ProfilePage from "./ProfilePage/ProfilePage";
import "./App.css";
// const LineLoader = () => {
//   return <div className="lineloader"></div>;
// };
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    // console.log(this.props.auth);
    return (
      <div className="appcontainer">
        <Router history={history}>
          {/* <Route path="/home/loading" exact component={LineLoader} /> */}
          {/* <Route path={"/eRrOrXxX"} exact component={Error} /> */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/profile" exact component={ProfilePage} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
