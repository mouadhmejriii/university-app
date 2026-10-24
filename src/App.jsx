import photo from './assets/mouadh2.jpeg'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="card">
        <img className="avatar" src={photo} alt="Photo de l'étudiant" />

        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> Mouadh Mejri</p>
        <p><strong>Email :</strong> mouadhmejriii@gmail.com</p>
        <p><strong>Téléphone :</strong> +216 94 290 327</p>
        <p><strong>Filière :</strong> Génie Logiciel et Systèmes d'Information</p>
        <p><strong>Année d'étude :</strong> 2026</p>
        <p><strong>Groupe :</strong> GLSI A</p>
        <p><strong>Ville :</strong> Mahdia</p>

        <a className="btn" href="mailto:mouadhmejriii@gmail.com">Contacter</a>
      </div>
    </div>
  )
}

export default App
