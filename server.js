const express = require("express");

const app = express()

// app.get('/', (req, res) => {
//   res.send("hi server")
// })
app.use(express.static(__dirname + '/public'))
app.listen(3000, ()=>{
  console.log("server!!!!")

})