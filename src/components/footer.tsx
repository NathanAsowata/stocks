import Link from "next/link"
import styles from "../styles/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p>
            Designed and built by <Link href={"https://www.nathanasowata.com/"} target={"_blank"}>Nathan Asowata</Link>. 
            Data provided by <Link href={"https://www.alphavantage.co/"} target={"_blank"}>Alpha Vantage API</Link>
        </p>
    </footer>
  )
}

export default Footer