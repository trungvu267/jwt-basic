import express from 'express'
import connectDb from './db/connect.js'
import notFound from './middleware/not-found.js'
import dotenv from 'dotenv'
import errorHandlerMiddleware from './middleware/error-handler.js'
import main from './routes/main.router.js'
dotenv.config()
const app = express()

app.use(express.json())

app.get('/hello', (req, res) => {
  res.send('Hello From Server')
})
app.use('/api/v1', main)

app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDb(process.env.MONGODB_URL)
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
