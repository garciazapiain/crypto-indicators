import './App.css';
// import CallTest from './CallTest';
import Indicators from './Indicators';

function App() {
//   var axios = require('axios');

// axios.get('https://api.taapi.io/rsi', {
//   params: {
//     secret: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5nYXJjaWF6YXBpYWluQGdtYWlsLmNvbSIsImlhdCI6MTYzNjExNTYxMiwiZXhwIjo3OTQzMzE1NjEyfQ.JwGddxkV5diMQ48aoRg1rXOzpnMS_CHs_AGuFCRDzmQ",
//     exchange: "binance",
//     symbol: "BTC/USDT",
//     interval: "1h",
//   }
// })
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error.response.data);
// });
const axios = require("axios");

    axios.post("https://api.taapi.io/bulk", {
        "secret": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1YW5nYXJjaWF6YXBpYWluQGdtYWlsLmNvbSIsImlhdCI6MTYzNjExNTYxMiwiZXhwIjo3OTQzMzE1NjEyfQ.JwGddxkV5diMQ48aoRg1rXOzpnMS_CHs_AGuFCRDzmQ",
        "construct": {
            "exchange": "binance",
            "symbol": "BTC/USDT",
            "interval": "1h",
            "indicators": [
                {
                    // Relative Strength Index
                    "indicator": "rsi"
                },
                {
                    // Chaikin Money Flow
                    "indicator": "cmf",
                    "period": 20 // Override the default 14
                },
                {
                    // MACD Backtracked 1
                    "id": "My custom id",
                    "indicator": "macd",
                    "backtrack": 1
                }
            ]
        }            
    })
    .then( response => {
        console.log(response);
    })
    .catch( error => {
        console.error(error)
    });
  return (
    <div className="App-header">
      <h1>Crypto Indicators</h1>
      <Indicators/>
      {/* <CallTest/> */}
    </div>
  );
}

export default App;
