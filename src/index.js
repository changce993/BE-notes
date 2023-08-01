require("dotenv").config()

const app = require("./server")
require("./database")

const PORT = app.get("port")

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})