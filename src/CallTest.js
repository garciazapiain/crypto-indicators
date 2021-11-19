










// function CallTest() {
//     const axios = require("axios");

//     axios.post("https://api.taapi.io/bulk", {
//         "secret": "MY_SECRET",
//         "construct": {
//             "exchange": "binance",
//             "symbol": "BTC/USDT",
//             "interval": "1h",
//             "indicators": [
//                 {
//                     // Relative Strength Index
//                     "indicator": "rsi"
//                 },
//                 {
//                     // Chaikin Money Flow
//                     "indicator": "cmf",
//                     "period": 20 // Override the default 14
//                 },
//                 {
//                     // MACD Backtracked 1
//                     "id": "My custom id",
//                     "indicator": "macd",
//                     "backtrack": 1
//                 }
//             ]
//         }            
//     })
//     .then( response => {
//         console.log(response);
//     })
//     .catch( error => {
//         console.error(error)
//     });
// }

// export default CallTest;
