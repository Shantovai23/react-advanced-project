import React, { Component, useRef } from "react";
import "./default.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Registration from "./pages/registration/index";
import HomePage from "./pages/Homepage/index";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Lagin/Login";
import { auth, handleUserProfile } from "./firebase/utils";

const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }


  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot=>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({
        ...initialState
      })
    });
  }


  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <HomePage />
              </MainLayout>
            )}
          />
          <Route
            path="/registration"
            render={() => (
              <MainLayout currentUser={currentUser}>
                <Registration />
              </MainLayout>
            )}
          />
          <Route
            path="/login"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
