import { useSelector } from "react-redux";

export default function FruityCart() {
  const fruityCart = useSelector(state => state.fruitsCart);
  console.log(fruityCart)
  return (
    <div className="bg-slate-100 rounded">
      <p className="text-xl p-5 border-b border-slate-400">Your FruityCart</p>
      <ul>

      </ul>
      <p className="text-xl p-5 border-t border-slate-400">Total price: </p>
    </div>
  )
}
