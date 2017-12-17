const fs = require('fs')
const xml2js = require('xml2js')

const file = fs.readFileSync('./test/example.xlf', 'utf8')
const parsed = xml2js.parseString(file, (e, data) => {
})
