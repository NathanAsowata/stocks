import Link from "next/link"

const Footer = () => {
  return (
    <footer>
        <p>Designed and built by 
            <Link href={"https://www.nathanasowata.com/"}>Nathan Asowata</Link>. 
            Data provided by 
            <Link href={"https://www.alphavantage.co/"}>Alpha Vantage API</Link>
        </p>
    </footer>
  )
}

export default Footer