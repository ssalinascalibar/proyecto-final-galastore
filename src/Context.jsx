import { Outlet, Navigate } from "react-router-dom";
// 1. se crea el contexto y se puede disponer desde cualquier lugar, como módulo
import { createContext, useState, useEffect } from "react";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  
  //Variable para el inicio de sessión de los usuarios
  const [loginForm, setLoginForm] = useState({});

  const[registerForm, setRegisterForm] = useState([])
  
  //estado usuario logeado
  const[userLogin, setUserLogin] = useState(null)

  //estados para agregar a los favoritos
  const [favorite, setFavorite] = useState(false);

  //estado para agregar productos
  const [nuevoProducto, setNuevoProducto] = useState([]);
  

  // Este estado guarda todos los productos en la variable giftCards
  const [giftCards, setGiftCards] = useState([]);

  //Estado que guarda los usuarios registrados en formulario de registros
  const [users, setUsers] = useState([]);

  //llamado a la api local de giftcards
  const getGiftCards = async () => {
    const endPoint = "/giftcards.json";
    const response = await fetch(endPoint);
    const data = await response.json();

    setGiftCards(data);
    console.log(data);
  };

  //llamado a la api local usuarios
  const getUsers = async () => {
    const endPoint = "/users.json";
    const response = await fetch(endPoint);
    const data = await response.json();

    setUsers(data);
    console.log(data);
  };

  // renderiza la api
  useEffect(() => {
    getGiftCards();
    getUsers();
  }, []);

  // función cerrar sesión
  const logOut = () => {
    setisAuth(false)
    
  }
  
  // const PrivateRoutes = ({ auth: {isAuth}, children }) => {
  //   // let auth = {'token':false}

  //       return isAuth? children : <Navigate to="/login" />
  //       // isAuth ? <Outlet/> : <Navigate to="/login"/>

  // };

  return (
    <Context.Provider
      value={{
        giftCards,
        setGiftCards,
        users,
        setUsers,
        isAuth,
        setisAuth,
        favorite,
        setFavorite,
        nuevoProducto,
        setNuevoProducto, 
        logOut,
        loginForm,
        setLoginForm,
        registerForm,
        setRegisterForm,
        userLogin,
        setUserLogin
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
