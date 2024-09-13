export default function Container() {
  const data = [
    {
      id: 1,
      name:"Marie"
    },
    {
      id: 2,
      name:"Paul"
    },
    {
      id: 3,
      name:"Louis"
    },

  ]
  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
   <ul>
      {data.map((user,index) => (
        <li key={index}>{user.name}</li>
      ))}
      </ul>
    </div>
  )
}