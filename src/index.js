import "dotenv/config"

import startServer from "./server.js"
import conectDatabase from "./db/connectDatabase.js"

const bootstrap = async () => {
    await conectDatabase()
    startServer()
}
bootstrap()

