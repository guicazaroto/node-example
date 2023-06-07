import express from 'express'
import routes from './routes.js'

const app = express()

app.listen(3000)

app.use(express.json())
app.use(routes)

export default app