// Vista Mi perfil
import React from 'react'

//context
import { useContext } from 'react'
import Context from '../Context';

//captura el parametro pasado por la url
import { useParams } from 'react-router-dom'

//components
import NavBarPrivate from '../Components/NavBarPrivate';
import ProfileEdit from '../Components/ProfileEdit';

//css
import myProfile from '../assets/css/myProfile.css';

export default function MyProfile() {

  const { users, setUsers, loginForm, setLoginForm, registerForm, setRegisterForm, userLogin } = useContext(Context);
  console.log(userLogin)
  console.log(users)
  console.log(registerForm)

  // recibe el parametro id que se pasa mediante la url de navigate
  // const { id } = useParams();

  // funcion que encuentra y compara el id pasado por url con el del array
  // const currentUser = users.find((user) => user.id === id);
  // console.log(id + 'id pasado por url');
  


  return (
    <div>
      <NavBarPrivate />
      <main className="main-myprofile">
        <div className="container">
          <h3><i className="fa-solid fa-user"></i>Mi perfil</h3>

            
          <div className="profileCard">
            <div className="img-profile">
            <h3>Hola {userLogin.nombre}</h3>
              <i className="fa-solid fa-user-secret"></i>
            </div>
            
            <div className="dataProfile">
              <table className="table" >
                <tbody>
                  <tr>
                    <td>Nombre <br/> <p className="text-profile">{userLogin.nombre}</p></td>
                  </tr>
                  <tr>
                    <td>Correo electrónico <br/> <p className="text-profile">{userLogin.correo} </p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          
          </div>
            <ProfileEdit/>
        </div>
      </main>
    </div>
  )
}
