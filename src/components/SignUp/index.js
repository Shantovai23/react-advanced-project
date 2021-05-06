import React, { Component } from "react";
import "./style.scss";
import FormInput from "../forms/FormInput/index";
import Button from "../forms/Buttons/index";
import { auth, handleUserProfile } from "../../firebase/utils";
import AuthWrapper from '../AuthWrapper/index'

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    if (password !== confirmPassword) {
      const err = ["Password doesn't Match"];
      this.setState({
        errors: err,
      });
      return;
    }

    if (displayName == "") {
      const err = ["Provide your Full Name"];
      this.setState({
        errors: err,
      });
      return;
    }

    if (email == "") {
      const err = ["Provide your Email"];
      this.setState({
        errors: err,
      });
      return;
    }

    if (password == "") {
      const err = ["Provide your Password"];
      this.setState({
        errors: err,
      });
      return;
    }

    if (password.length < 5) {
      const err = ["Password should be greater than 6"];
      this.setState({
        errors: err,
      });
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // await handleUserProfile(user, { displayName });
      await user.updateProfile({ displayName });

      console.log(user);
      this.setState({
        ...initialState,
      });
    } catch (err) {
      console.log(err.message);
      const err2 = ["Email Already Used"];
      this.setState({
        errors: err2,
      });
    }
  };
  render() {
    const configAuthWrapper={
      headline:"SignUp"
    }
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;

    return (
         <AuthWrapper {...configAuthWrapper}>

          <div className="formwrap">
          {errors.length > 0 && (
            <ul style={{ paddingTop: "5px" }}>
              {errors.map((err, index) => (
                <li key={index}>*{err}</li>
              ))}
            </ul>
          )}

            <form onSubmit={this.handleFormSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="full Name"
                onChange={this.handleChange}
              />

              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="email"
                onChange={this.handleChange}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleChange}
              />

              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="confirmPassword"
                onChange={this.handleChange}
              />

              <Button type="submit">Register</Button>
            </form>
          </div>
          </AuthWrapper>
    );
  }
}

export default SignUp;
