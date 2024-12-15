import express from "express"
const app = express()


app.use("/",(req, res) => {
    // console.log(process.env.PORT);
    res.send("Hello auth")
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})