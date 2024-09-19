import useAPICall from "./hooks/useAPICall";
import spinner from "./spinner.svg";

export default function Container() {
  const { catData, error, loading } = useAPICall();

  let content;
  if (loading && !error) {
    content = <img src={spinner} alt="icône de chargement" />;
  } else if (error) {
    content = <p>Une erreur est survenue...</p>;
  } else if (catData) {
    // content = < src={catData[0].url} alt="photo d'un chat" />;
    content = catData.map((cat) => (<img src= {cat.url} alt="photo d'un chat" />))
  }
  return (
    <div>
      <h1>Photo de chats 🐾</h1>
      {content}
    </div>
  );
}
