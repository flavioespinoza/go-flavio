const fs = require('fs')
const async = require('async')
const log = require('@flavioespinoza/log_log')

const filesToRead = [
    'file1',
    'file2'
]

async.map(filesToRead, (filePath, callback) => {
    fs.readFile(filePath, 'utf-8', callback)
}, (err, results) => {
    if (err) {
        return console.log(err)
    }

    log.blue(results)
})