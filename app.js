const express = require("express")
const ConnectDb = require("./Connection")
const bookController = require("./Controller/BookController")


const app = express()
ConnectDb()

app.use(express.json())
app.set("view engine", "ejs")
app.use("/public", express.static("./public"))

// app.get("/insert",bookController.InsertMany)
app.put("/update", bookController.UpdateDetail)
app.post("/create", bookController.CreateUser)
app.get("/", bookController.listUser)
app.delete("/user/:id", bookController.DeleteUser)




app.listen(5000, () => {
    console.log("Server started");
})