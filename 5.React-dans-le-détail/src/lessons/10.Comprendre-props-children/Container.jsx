import Child from "./Child";
export default function Container() {
  return (
    <div>
      <Child>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          corrupti sed nobis vitae quaerat rerum asperiores pariatur adipisci
          earum assumenda illum, esse amet expedita corporis. Officia vitae
          ratione numquam reiciendis.
        </p>
      </Child>
      <Child>
        <button>Valider</button>
      </Child>
      <Child>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Child>
    </div>
  );
}
