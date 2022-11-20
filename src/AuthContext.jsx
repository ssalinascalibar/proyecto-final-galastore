// import { Outlet, Navigate } from "react-router-dom";
// // 1. se crea el contexto y se puede disponer desde cualquier lugar, como módulo
// import { createContext, useState } from "react"; 

// const AuthContext = createContext({});


// const AuthContextProvider = ({ children }) => {
//     const [isAuth, setIsAuth] = useState(false);

//     // const PrivateRoutes = () => {
//     //     // let auth = {'token':false}
//     //     return isAuth ? <Outlet/> : <Navigate to="/register"/>
        
//     // }
    
    
//   return (
//     <AuthContext.Provider value={{isAuth, setIsAuth}}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

// export { AuthContextProvider };
// export default AuthContext;