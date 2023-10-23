import { useContext, useRef, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "./Context";




const Registration = () => {
const [errors,seterrors]=useState('')
const [success,setsuccess]=useState('')
const emailref=useRef(null)
const {createUser}=useContext(AuthContext)

const [showpass,setshowpass]=useState(false)

const handleshow=()=>
{
setshowpass(!showpass)


}
const handlechangepassword=()=>{

const email=emailref.current.value

console.log(email)
}
const handleLogin=e=>
{
e.preventDefault()

const useremail=e.target.email.value
const userpass=e.target.password.value
if(!/[A-Z]/.test(userpass))
{

seterrors('Must Use a capital letter')
return
}
seterrors('')
setsuccess('')

createUser(useremail,userpass)
.then(data=>{
console.log(data.user)
setsuccess('user created succesfully')
sendEmailVerification(data.user)

})

.catch(error=>{
console.error(error)
seterrors(error.message)

})

}



  return (
    <div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label w-full">
                    <span className="label-text" >Email</span>
                  </label>
                  <input type="text" placeholder="email" className="input input-bordered" name="email" ref={emailref}/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"  >Password</span>
                  </label>
                  <input
 type={showpass ? 'text':'password'} 
placeholder="password" 
className="input input-bordered"
 name="password"/>

<span onClick={handleshow}>
{showpass ? <FaEyeSlash></FaEyeSlash>: <FaEye></FaEye>}


</span>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover" onClick={handlechangepassword}>Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type="submit">SignIn</button>
                </div>

              </form>
{

errors && <p className="text-red-600">{errors}</p>}
{
success && <p className="text-green-600">{success}</p>

}
            </div>
          </div>
        </div>
      </div>

<Link to='/login'>Login</Link>
    </div>
  );
};

export default Registration;