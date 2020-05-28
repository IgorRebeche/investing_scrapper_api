require('dotenv').config()
import { InvestingServices } from './services/services'

async function main() {
  const iv = new InvestingServices()
  await iv.createAlert('BBDC4', 'over', 'Once', 35, 'price')
}

main()
