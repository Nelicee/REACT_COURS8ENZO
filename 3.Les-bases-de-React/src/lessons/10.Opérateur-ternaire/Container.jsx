import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation,setValidation] = useState(false)

  return (
    <div>
      <form><label htmlFor="consent">Acceptez-vous?</label>
      <input 
      onClick={() => setValidation(!validation)}
      type="checkbox" /></form>
      <p 
      className={`${validation ? "valide" : "invalid"}`}
      // style ={{color: `${validation ? "lightgreen" : "red"  }`}}
      >
        {validation ? "Bravo, vous pouvez envoyer le formulaire" : "Vous devez cochez la case"}
      </p>
      {validation ? <p>True</p> : <p>False</p>}
      
    </div>
  )
}
