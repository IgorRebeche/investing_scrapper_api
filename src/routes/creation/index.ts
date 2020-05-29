import express from 'express'
import alert from './alert-route'

const router = express.Router()

router.use('/alert', alert)

export default router
