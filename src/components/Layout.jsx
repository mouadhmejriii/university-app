export function Header() {
  return (
    <header className="header">
      <h1>Université de Mahdia</h1>
      <p>Espace étudiants</p>
    </header>
  )
}

export function Navbar() {
  return (
    <nav className="navbar">
      <a href="#accueil">Accueil</a>
      <a href="#etudiants">Étudiants</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Université de Mahdia, GLSI</p>
    </footer>
  )
}
