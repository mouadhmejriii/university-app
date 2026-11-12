import './StudentForm.css'
function StudentForm({onAjoutEtudiant}) {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [filiere, setFiliere] = useState("")
    const [anEtd, setAnneeEtude] = useState("")
    const [groupe, setGroupe] = useState("")
    const [ville, setVille] = useState("")
    const [image, setImage] = useState("")
    return(
<form onsubmit="{handleSubmit}" className="student-form">
    <p>ajouter in etudiant</p>
    <div className="form-group"><label>Nom:</label><br/><input type="text" placeholder="votre nom" id="nom"value={nom} onChange={(e) => setNom(e.target.value)}/></div><br/>
    <div className="form-group"><label>Prenom:</label><br/><input type="text" placeholder="votre Prenom" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/></div><br/>
    <div className="form-group"><label>email:</label><br/><input type="email" placeholder="votre email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/></div><br/>
    <div className="form-group"><label>telephone:</label><br/><input type="tel" placeholder="votre telephone" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)}/></div><br/>
    <div className="form-group"><label>Filliere:</label><br/>
    <select id="filliere" value={filiere} onChange={(e) => setFiliere(e.target.value)}>
        <option>choisir une filliere</option>
        <option>GLSI</option>
        <option>IOT</option>
        <option>RSI</option>
    </select><br/></div>
    <div className="form-group"><label>annne Etudue:</label><br/><input type="date" placeholder="votre annne Etudue" id="anEtd" value={anEtd} onChange={(e) => setAnneeEtude(e.target.value)}/></div><br/>
    <div className="form-group"><label>Group:</label><br/><input type="text" placeholder="votre Group" id="Group" value={groupe} onChange={(e) => setGroupe(e.target.value)}/></div>   <br/>
    <div className="form-group"><label>ville:</label><br/><input type="text" placeholder="votre ville" id="ville" value={ville} onChange={(e) => setVille(e.target.value)}/></div><br/>
    <div className="form-group"><label>image:</label><br/><input type="file" accept="image/*" onChange={(e) => {const fichier=e.target.files[0] ; if(fichier){setImage(URL.createObjectURL(fichier));}}}/><br/></div>
    <button type="submit" className="btn-submit">Ajouter</button>

</form>
)
}
function handleSubmit(e){
    e.preventDefault();
    const nouvelEtudiant={
        nom: nom,
        prenom: prenom,
        email: email,
        telephone: telephone,
        filiere: filiere,
        anneeEtude: anEtd,
        groupe: groupe,
        ville: ville,
        image: image,
      }
      console.log("Nouvel étudiant ajouté:", nouvelEtudiant);
      onAjoutEtudiant(nouvelEtudiant);  
}
export default StudentForm