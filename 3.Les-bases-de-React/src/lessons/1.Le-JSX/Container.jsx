function Container() {
  const txt = "Test";

  function handleclick(e,id){
    console.log("click",e,id)
  }
  return (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      {/* <ul className="list">
      <li>item</li>
      <li>item</li>
      <li>item</li>
    </ul> */}
      <button>Valider</button>
      <p>{10 + 10}</p>
      <p>{"ab" + "c"}</p>
      <p>{"La chat saute !".toUpperCase()}</p>
      <p>{txt}</p>
      {/* <p>{[<span>Hello World</span>]}</p> */}
      <input type="text" />
      <hr />
      <img src="" alt="" />
      <p className="txt">Lorem ipsum dolor sit amet consectetur.</p>
      <label htmlFor=""></label>
      <button aria-label="toggle button"></button>

      <button onClick={e => handleclick(585)}>Click</button>
    </div>
  );
}
export default Container;
/*
jsx("div", {children: [jsx(p,children)]})
*/
/*
 btn.addEventListener("click", () => console.log("click"))
*/
