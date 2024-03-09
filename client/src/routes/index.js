import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Signin from '../pages/Signin'
import Siginup from '../pages/Siginup'
import Dashboard from '../pages/dashboard'



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "user-profile",
                element : <Dashboard/>
            },
            {
                path : 'sign-in',
                element : <Signin/>
            },
            {
                path : "sign-up",
                element : <Siginup/>
            },
            
        ]
    }
])

export default router