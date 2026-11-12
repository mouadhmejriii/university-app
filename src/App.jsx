import './App.css'
import StudentCard from './components/StudentCard.jsx'
import { Header, Navbar, Footer } from './components/Layout.jsx'
import mouadhImage from './assets/mouadh2.jpeg'
import StudentForm from './components/StudentForm.jsx'

const etudiants = [
  {
    prenom: 'Mouadh',
    nom: 'Mejri',
    email: 'mouadhmejriii@gmail.com',
    telephone: '+216 94 290 327',
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: '2ème année',
    groupe: 'GLSI A',
    ville: 'Mahdia',
    image: mouadhImage,
  },
  {
    prenom: 'Sarra',
    nom: 'Trabelsi',
    email: 'sarra.trabelsi@gmail.com',
    telephone: '+216 22 345 678',
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: '2ème année',
    groupe: 'GLSI 1',
    ville: 'Sousse',
  },
  {
    prenom: 'Mariem',
    nom: 'Khalfallah',
    email: 'mariem.khalfallah@gmail.com',
    telephone: '+216 27 567 890',
    filiere: "Génie Logiciel et Systèmes d'Information",
    anneeEtude: '2ème année',
    groupe: 'GLSI 2',
  },
]
function ajouter(){
          const nouvelEtudiant={
            prenom: 'mouadh',
            nom: 'mejri',
            email: 'sarra.ze@gmail.com',
            telephone: '+216 22 345 678',
            filiere: "Génie Logiciel et Systèmes d'Information",
            anneeEtude: '2ème année',
            groupe: 'GLSI 8',
            ville: 'Sousse',
          }
          setEtudiant(...etudiants,nouvelEtudiant  )
}
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container">
        {etudiants.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
          />
        ))
        }
      </main>

      <Footer />
    </div>
  )
}
function ajouterEtudiant(nouvelEtudiant) {
  const etudiants = {
    ...nouvelEtudiant,
    id: Date.now,
  };
  setEtudiants((ancienEtudiants) =>[ancienEtudiants, etudiantsAvecId]);
}
<StudentForm
  onAjoutEtudiant={ajouterEtudiant}
/>

export default App
