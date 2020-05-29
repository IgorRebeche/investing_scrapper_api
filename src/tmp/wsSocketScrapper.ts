import WebSocket from 'ws'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const headers = {
  Host: 'stream153.forexpros.com',
  'User-Agent':
    'Mozilla/5.0 (X11; Linux x86_64; rv:76.0) Gecko/20100101 Firefox/76.0',
  Accept: '*/*',
  'Accept-Language': 'en-US,pt-BR;q=0.8,pt;q=0.5,en;q=0.3',
  'Accept-Encoding': 'gzip, deflate, br',
  'Sec-WebSocket-Version': 13,
  Origin: 'https://www.investing.com',
  // "Sec-WebSocket-Extensions": "permessage-deflate",
  //   "Sec-WebSocket-Key": "L+3HfvAdU7A4J2KSXGFz/Q==",
  Connection: 'keep-alive, Upgrade',
  Pragma: 'no-cache',
  'Cache-Control': 'no-cache',
  Upgrade: 'websocket',
}

const ws = new WebSocket(
  'wss://stream290.forexpros.com/echo/798/a26yizra/websocket',
  { headers: headers }
)

function heartbeat() {
  clearTimeout(this.pingTimeout)

  // Use `WebSocket#terminate()`, which immediately destroys the connection,
  // instead of `WebSocket#close()`, which waits for the close timer.
  // Delay should be equal to the interval at which your server
  // sends out pings plus a conservative assumption of the latency.
  this.pingTimeout = setTimeout(function () {
    ws.send(
      JSON.stringify({
        _event: 'heartbeat',
        data: 'h',
      })
    )
  }, 3e3)
}

ws.on('open', function open() {
  ws.send([
    [
      '{"_event":"bulk-subscribe","tzID":8,"message":"pid-1057391:%%pid-1061443:%%pid-1057392:%%pid-1061453:%%pid-1061410:%%pid-169:%%pid-166:%%pid-172:%%pid-24441:%%pid-178:%%pid-171:%%pid-14958:%%pid-8830:%%pid-8849:%%pid-1:%%pid-945629:%%pid-23705:%%pid-2:%%pid-3:%%pid-4:%%pid-5:%%pid-7:%%pid-20:%%pid-27:%%pid-179:%%pid-8839:%%pid-8874:%%pid-44336:%%pid-8827:%%event-407146:%%event-407103:%%event-407380:%%event-407095:%%event-406165:%%event-406167:%%event-406164:%%isOpenExch-1:%%isOpenExch-2:%%isOpenPair-8839:%%isOpenPair-8874:%%isOpenPair-44336:%%isOpenPair-8827:%%domain-1:"}',
    ],
  ])
  ws.send([['{"_event":"UID","UID":0}']])

  heartbeat()
})

// ws.on("ping", heartbeat);

ws.on('message', function listener(a) {
  console.log('data', a.data)
})

ws.on('error', function listener(data) {
  console.log(data)
})

ws.on('heartbeat', (a) => {
  console.log(a)
})

// 0: {"_event"S:"UID","UID":0}

// 0: {"_event":"heartbeat","data":"h"}
