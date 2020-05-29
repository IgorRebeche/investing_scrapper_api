import express from 'express'
import { InvestingServices } from '../../services/services'
const router = express.Router()

router.post('/', async function (req, res) {
  const { asset_ticker, threshold, frequency, value, alert_trigger } = req.body
  const iv = new InvestingServices()

  try {
    await iv.createAlert(
      asset_ticker,
      threshold,
      frequency,
      value,
      alert_trigger
    )

    res.send('Event created!')
    res.status(200)
  } catch (error) {
    res.json({
      errors: [error],
    })

    res.status(400)
  }
})

export default router
