import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useState } from "react";
//Vistas
import Home from './views/Home'; // pagina principal
import Login from './views/Login'; // inicio de sesión
import Register from './views/Register'; // Registro
import MyProfile from './views/MyProfile'; // Mi perfil
import MyPosts from './views/MyPosts'; // Mis publicaciones
import PostDetail from './views/PostDetail'; // Destalle de cada publicación
import Post from './views/Post'; // Publicar
import Favorites from './views/Favorites'; // Mis favoritos
import Store from './views/Store'; // tienda
import GiftCardDetail from './views/GiftCardDetail';

//Context
import { useContext } from 'react'
import { ContextProvider } from './Context';
import Context from './Context';

//components
import Footer from './Components/Footer';
import PrivateRoutes  from './Components/PrivateRoutes';



function App() {
  const { isAuth } = useContext(Context)
  
  // const [isAuth, setisAuth] = useState(false);
  
  console.log(isAuth)
  return (
    <div>
      
      
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            
            <Route element={<PrivateRoutes/>}>
              <Route path='/store/miperfil' element={<MyProfile />}/>
              <Route path='/store/miperfil/mispublicaciones' element={<MyPosts />}/>
              <Route path='/store/miperfil/mispublicaciones/:id' element={<PostDetail />}/>
              <Route path='/store/miperfil/publicar' element={<Post />}/>
              <Route path='/store/miperfil/favoritos' element={<Favorites />}/>
              <Route path='/store' element={<Store />}/>
              <Route path='/store/giftcard/:id' element={<GiftCardDetail />}/>
            </Route>   
              
    
            
          </Routes>
        </BrowserRouter>
      
      
      <Footer />
    </div>
  );
}

export default App;
