import React,{Component} from 'react'
import './style.scss'
import Button from '../forms/Buttons/index'
import {signInWithGoogle} from '../../firebase/utils'

class SignIn extends Component{

    handleSubmit=async e=>{
        e.preventDefault()
    }
    render(){
        return(
            <div className='signin'>
             <div className="wrap">
                 <h3 className='login'>Login</h3>
    
                 <div className="formwrap">
                     <form  onSubmit={this.handleSubmit}>
                         <div className="socialSignin">
                             <div className="row">
                                <Button onClick={signInWithGoogle}>Sign in With Google</Button>
                             </div>
                         </div>
                     </form>
                 </div>
             </div>
            </div>
        )
    }
 
}

export default SignIn