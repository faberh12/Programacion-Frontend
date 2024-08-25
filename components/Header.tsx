import '../styles/Header.css'

export default function Header() {
    return (
        <div className="header">
        <h1 className="header-title">Mi sitio web</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
      </div>
      
    )
}