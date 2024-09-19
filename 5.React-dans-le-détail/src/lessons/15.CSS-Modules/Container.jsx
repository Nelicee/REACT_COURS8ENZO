import styles from "./Container.module.css"
import "./Container.css"
export default function Container() {
console.log(styles);
  return (
    <div>
      {/* <h1>CSS Modules</h1> */}
      <h1 className={styles.title}>CSS Modules</h1>
    </div>
  )
}
