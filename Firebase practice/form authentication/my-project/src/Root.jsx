import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Context from "./Context";

const Root = () => {

const info=useContext(Context)
console.log(info)
    return (
        <div> <h1>Homepage</h1>
             <Outlet></Outlet>
        </div>
    );
};

export default Root;