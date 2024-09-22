import "./Content.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeProvider"

export default function Content() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className="container">
        <h1>You are in {darkMode ? "Dark" : "Light"} mode.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas culpa voluptatum sint illum blanditiis sapiente hic, ut aperiam reprehenderit, vero officiis doloremque excepturi natus cumque non perspiciatis ipsa repudiandae quas libero, impedit error atque veniam quibusdam perferendis? Harum et accusamus, eius obcaecati amet iure suscipit asperiores magni nostrum eos aperiam ducimus beatae laboriosam iste veritatis consectetur vero earum aspernatur. Iste, officiis quam! Itaque impedit necessitatibus, id beatae inventore veniam tempore odio sit cumque molestias unde iure sunt minus praesentium. Esse et cumque distinctio qui eius ipsum vitae hic deleniti at fugit, optio aperiam quia, odit quaerat minima, veniam expedita iusto?</p>
    </div>
  )
}