import React, { Component } from "react";
import {Link} from 'react-router-dom'
import "./style.scss";
import Button from "../forms/Buttons/index";
import { signInWithGoogle ,auth} from "../../firebase/utils";
import FormInput from "../forms/FormInput/index";
import Buttons from "../forms/Buttons/index";
import AuthWrapper from '../AuthWrapper/index'

const initialState = {
  email: "",
  password: "",
  errors:[]
};

class SignIn extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const {email,password}=this.state

    try{
    await auth.signInWithEmailAndPassword(email,password)
    this.setState({
        ...initialState
    })
    }catch(err){
        console.log(err);
        const err3=['Invalid Email/Password']
        this.setState({
          errors:err3
        })
    }
  };
  render() {
    const { email, password ,errors} = this.state;
    const configAuthWrapper={
      headline:'Login'
    }
    return (
      
          <AuthWrapper {...configAuthWrapper}>

          <div className="formwrap">
           {errors.length>0 && (
             <ul>
               {errors.map((val,index)=>(
                 <li key={index}>
                   {val}
                 </li>
               ))}
             </ul>
           )}
            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange={this.handleChange}
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                handleChange={this.handleChange}
              />

              <Buttons type='submit'>
                  Login
              </Buttons>
              <div className="socialSignin">
                <div className="row">
                  <Button onClick={signInWithGoogle}>
                    Sign in With Google
                  </Button>
                </div>
              </div>

              <div className="links">
                <Link to='/recovery'>
                 Forgot Password ?
                </Link>
              </div>
            </form>
          </div>
          </AuthWrapper>
    );
  }
}

export default SignIn;
