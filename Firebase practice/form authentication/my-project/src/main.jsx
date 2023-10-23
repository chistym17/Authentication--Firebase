import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';

import Login from './Login';
import Registration from './Registration'
import Context from './Context';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

  children:[
{
path:'/login',
element:<Login></Login>

},
{
path:'/register',
element:<Registration></Registration>


}
]





  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


<Context>
        <RouterProvider router={router} />

</Context>

  </React.StrictMode>,
)
