import { Outlet, Navigate } from "react-router-dom";

import { useContext } from 'react'
import Context from "../Context";


const PrivateRoutes = () => {
    const { isAuth } = useContext(Context);
    // let auth = {'token':false}
    console.log(isAuth)
    return(
        isAuth ? <Outlet/> : <Navigate to="/login"/>
    )
    

    // muestra multiples rutas que estrán protegidas bajo la misma lógica
    return <Outlet/>
}

export default PrivateRoutes
