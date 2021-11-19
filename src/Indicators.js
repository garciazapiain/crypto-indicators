import { useEffect, useState } from "react";

function Indicators () {
    const [indicators, setIndicators]  = useState([])
    
    const fetchMyAPI = useEffect(() => {
        async function fetchMyAPI() {
          let response = await fetch('https://api.taapi.io/bulk',{
            method: 'POST',
            contentType:'application/json',
            body:JSON.stringify({
                    "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5nYXJjaWF6YXBpYWluQGdtYWlsLmNvbSIsImlhdCI6MTYzNjExNTYxMiwiZXhwIjo3OTQzMzE1NjEyfQ.JwGddxkV5diMQ48aoRg1rXOzpnMS_CHs_AGuFCRDzmQ",
                    "construct": {
                        "exchange": "binance",
                        "symbol": "BTC/USDT",
                        "interval": "5m",
                        "indicators": [
                        {
                          "indicator": "rsi"
                        },
                        {
                          "indicator": "stoch"
                        },
                        {
                          "indicator": "macd"
                        }
                        ]
                    }
                })
            })
          response = await response.json()
        //   setIndicators(response)
        console.log(response)
        }
    
        fetchMyAPI()
      }, [])
    
    return(
        <div>
            <h1>{indicators}</h1>
            <button onClick={fetchMyAPI}>Click</button>
        </div>
    )
}

export default Indicators