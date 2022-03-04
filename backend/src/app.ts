import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'
import userRouter from './routers/user'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: '*',
    allowedHeaders: 'X-Requested-With, content-type',
    methods: 'GET, POST, OPTIONS',
    credentials: true,
  })
)

app.use('/api', userRouter)

// custom API error handler
app.use(apiErrorHandler)
app.use(apiContentType)

export default app





