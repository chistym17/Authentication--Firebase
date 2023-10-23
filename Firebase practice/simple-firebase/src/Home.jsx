import app from "./firebase/firebase.init";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const Home = () => {
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const handleSignin=()=>
{
signInWithPopup(auth,provider)
.then(result=>{
const user=result.user
console.log(user)


})
.catch(error=>{

console.log('error',error.message)

})



}
    return (
        <div>
             <h1>Home</h1>
<button type="button" onClick={handleSignin}>Google SignIn</button>
        </div>
    );
};

export default Home;