const express = require("express")
const UserController = require("./controller/userController")
const { default: mongoose } = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/bank")
.then(_ => console.log("DB bağlantisi tamam."))
.catch(err => console.log(err))

app.post("/saveuser", UserController.saveUser)
app.post("/login", UserController.login)
app.post("/changeuser", UserController.changeUser)
app.post("/transfer", UserController.transfer)
// app.post("/get", UserController.transfer)
// app.get("/usersave", UserController.saveUser)


app.listen(3000, () =>{
    console.log("3000 portuna bağlanildi")
})