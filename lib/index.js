const http = require('http')
const fs = require('fs')
const path = require('path')
const views = require('../views.js')
const trumpet = require('trumpet')
const ecstatic = require('ecstatic')
const st = ecstatic({
    root: './static',
    gzip: true
})

const router = require('routes')()
router.addRoute('/', function (req, res) {
  layout(res).end(views.index())
})

module.exports = {
  start: function (port) {
    http.createServer(function (req, res) {
      var match = router.match(req.url)
      if (match) match.fn(req, res, match.params)
      else st(req, res)
    })
    .listen(port, function () {
      console.log(`server is runing at http://localhost:${port}`)
    })
  },

  blastOff: function (port) {
    this.start(port)
  }
}

function layout (res) {
  res.setHeader('content-type', 'text/html')
  var tr = trumpet()
  read('index.html').pipe(tr).pipe(res)
  return tr.createWriteStream('#container')
}

function read (file) {
  return fs.createReadStream(path.join('./static', file))
}
