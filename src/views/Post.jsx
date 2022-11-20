// Vista Publicar
import React from 'react'

//Components
import NavBarPrivate from '../Components/NavBarPrivate';
import PostForm from '../Components/PostForm';

//css
import post from '../assets/css/post.css';

export default function Post() {
  return (
    <div>
      <NavBarPrivate />
      <main className="main-post">
        <div className="container">
        <h3><i className="fa-solid fa-paper-plane"></i>Publicar </h3>
          <PostForm />
        </div>
      </main>
    </div>
  )
}
