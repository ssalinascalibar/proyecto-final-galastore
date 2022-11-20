import footer from '../assets/css/footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="brand">
        <i className="fa-solid fa-cat"></i>
      </div>
      <div className="social-media">
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
      <div className="copyright">
        <p>@Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
