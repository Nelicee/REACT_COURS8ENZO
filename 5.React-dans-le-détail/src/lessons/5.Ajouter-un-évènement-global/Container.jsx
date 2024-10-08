import { useState} from "react"
import HugeContent from "./HugeContent"


export default function Container() {
  const [showContent, setShowContent] = useState(false)

  return (
    <div>
      <button onClick={()=> setShowContent(!showContent)}>
        {showContent ? "Cacher" : "Montrer"} le contenu</button>
      {showContent && <HugeContent />}

    </div>
  )
}
