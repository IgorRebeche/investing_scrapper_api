require('dotenv').config()
import ngrok from 'ngrok'
import express from 'express'

import api from './routes/index'

const PORT = process.env.PORT
const app = express()

app.use(express.json())

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Running Server on port ${PORT}`)

  const createTunnel = async () => {
    const publicUrl = await ngrok.connect(Number(PORT))
    console.log(`Link for the public URL: ${publicUrl}`)
  }

  createTunnel()
})
