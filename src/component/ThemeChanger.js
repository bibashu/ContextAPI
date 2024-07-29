import { useState } from "react";
import { useThemeContext } from "../provider/ThemeContext";

const ThemeChanger = () => {
  const {  setCouleurPrincipale, setPolice } =
    useThemeContext();

  const [couleur, setCouleur] = useState("");
  const [Newpolice, setNewPolice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(!couleur || !Newpolice){
        return
    }
    setCouleur(couleur);
    setCouleurPrincipale(couleur);
    setPolice(Newpolice)
  }

  return (
    <form className="container w-25 mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Couleur</label>
        <input
          className="form-control"
          onChange={(e) => setCouleur(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Police</label>
        <input className="form-control" onChange={(e) => setNewPolice(e.target.value)}/>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ThemeChanger;
