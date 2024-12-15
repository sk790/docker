import express from "express"
const app = express()


app.get("/",(req, res) => {
    console.log(process.env.PORT);
    res.send("Hello backend Saurabh Nagar")
})


app.listen(process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})