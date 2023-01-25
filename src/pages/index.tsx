
interface PropTypes {
  StockDetails:{
  "Meta Data": {
    "2. Symbol": string
  }
}}

const Home = ({StockDetails}: PropTypes) => {
  return (
    <>
    <h2>{StockDetails["Meta Data"]["2. Symbol"]}</h2>

    </>
  )
}

export default Home

export async function getServerSideProps () {
  const URL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=30min&apikey=${process.env.API_KEY}`
 const res = await fetch(URL)
 const data = await res.json()
  
  return{
    props: {
      StockDetails: data
    }
  }
}