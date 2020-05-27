import axios from 'axios'

const baseHeaders = {
  Host: 'br.investing.com',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64; rv:76.0) Gecko/20100101 Firefox/76.0',
  Accept: 'application/json, text/javascript, */*; q=0.01',
  'Accept-Language': 'en-US,pt-BR;q=0.8,pt;q=0.5,en;q=0.3',
  'Accept-Encoding': 'gzip, deflate, br',
  Referer: 'https://br.investing.com/',
  'Content-Type': 'application/x-www-form-urlencoded',
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Length': 52,
  Origin: 'https://br.investing.com',
  Connection: 'keep-alive',
  Cookie: process.env.COOKIE,
}

export const ivApi = axios.create({
  baseURL: 'https://br.investing.com',
  headers: baseHeaders,
})
