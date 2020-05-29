import express from 'express'
import creation from './creation'

const router = express.Router()

router.use('/create', creation)

export default router
