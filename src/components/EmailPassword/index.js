import React,{Component} from 'react'

import AuthWrapper from '../AuthWrapper/index'
import FormInput from '../forms/FormInput/index'
import Buttons from '../forms/Buttons/index'
import Button from '../forms/Buttons/index'
import {auth} from '../../firebase/utils'
import {withRouter} from 'react-router-dom'
import reactDom from 'react-dom'

const initialState={
    email:'',
    errors:[]
}

class EmailPassword extends Component{
    constructor(props){
        super(props)
        this.state={
            ...initialState
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit=async (e)=>{
        e.preventDefault()

        try{
            const {email}=this.state
            const config={
                url:'http://localhost:3000/login'
            }
         await auth.sendPasswordResetEmail(email,config)
         .then(()=>{
             this.props.history.push('/login')
         })
         .catch((error)=>{
             const err=['This Email is not Registered']
             this.setState({
                 errors:err
             })
         })
        }catch(err){
            console.log(err);
        }
    }
    render(){
        const {email,errors}=this.state
        const configAuthWrapper={
            headline:'Reset Password'
        }
        return(
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
                  <form  onSubmit={this.handleSubmit}>
               <FormInput
                   type='email'
                   name='email'
                   value={email}
                   placeholder='Email'
                   onChange={this.handleChange}
               />

                  <Button type='submit'>
                      Reset Password
                  </Button>
                  </form>
              </div>
            </AuthWrapper>
        )
    }
}

export default withRouter(EmailPassword)